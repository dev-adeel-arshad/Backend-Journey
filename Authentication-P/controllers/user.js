
const express = require("express")
const { v4: uuidv4 } = require("uuid")
const User = require("../models/user")
const { setUser } = require("../service/auth")
async function handleUserSignUp(req, res) {


    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password

    });

    return res.redirect("/")

}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password })
    if (user) {
        // const sessionId = uuidv4(); CZ WE ARE USING STATELESS AUTHENTICATION
       const token= setUser(user);
        res.cookie("uid",token)
        return res.redirect("/")

    }
    else {
        res.status(401).send("Invalid Credentials");
    }
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}