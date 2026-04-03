const express = require('express');
const router = express.Router();
const {generateNewShorturl}=require("../controllers/url.js")


router.post("/", generateNewShorturl)

module.exports = router;