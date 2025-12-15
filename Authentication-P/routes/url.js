

const express = require('express');

const router = express.Router();

const {
    generateNewShorturl,
    redirectToOriginalUrl,
    deleteShortUrl,
    urlAnalytics,
     
} = require("../controllers/url.js");


// Create new short URL
router.post("/", generateNewShorturl);


// Redirect & delete
router.route("/:shortId")
    .get(redirectToOriginalUrl)
    .delete(deleteShortUrl);


// Analytics
router.get("/analytics/:shortId", urlAnalytics);


module.exports = router;
