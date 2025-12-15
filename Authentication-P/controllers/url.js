const express = require("express");
const { nanoid } = require("nanoid");
const URL = require("../models/url.js");


async function generateNewShorturl(req, res) {

    const shortID = nanoid(8);
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: "url is required" })
    }
    await URL.create({

        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy:req.user._id,
    })
    return res.render('home', {
        id: shortID,
    })
}

async function redirectToOriginalUrl(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            visitHistory: {
                time: Date.now(),
            },
        },
    }, { new: true })
    return res.redirect(entry.redirectUrl)
}

async function deleteShortUrl(req, res) {
    const shortId = req.params.shortid;
    URL.findOneAndDelete(shortId)
        .then(() => res.json({ message: "Deleted Successfully" }))
        .catch((err) => res.json({ message: err.message }))
}

async function urlAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    res.json({
        TotalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

async function getAllUrl(req, res) {
    const urls = await URL.find({});
    res.json(urls);
}

module.exports = {
    generateNewShorturl,
    redirectToOriginalUrl,
    deleteShortUrl,
    urlAnalytics,
    getAllUrl
}