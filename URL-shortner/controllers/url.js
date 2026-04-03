const express = require("express");
const { nanoid } = require("nanoid");
const URL = require("../models/url.js");


async function generateNewShorturl(req, res) {

    const shortID = nanoid(8);
    const body = req.body;
    if (!body.redirectUrl) {
        return res.status(400).json({ error: "redirectUrl is required" })
    }
    await URL.create({

        shortId: shortID,
        redirectUrl: body.redirectUrl,
        visitHistory: []
    })
    return res.json({ shortId: shortID,
        redirectUrl: body.redirectUrl
     })
}

module.exports={
    generateNewShorturl,
}