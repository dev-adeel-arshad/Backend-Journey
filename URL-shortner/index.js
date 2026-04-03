

const express = require('express');
const connectDB = require("./connection.js")
const app = express();
const path=require("path")
const urlRouter = require("./routes/url");
const { generateNewShorturl } = require('./controllers/url.js');
app.use(express.json());
const URL = require("./models/url.js")


// DB Connection
connectDB("mongodb://127.0.0.1:27017/URL-shortner")
.then(() => (
    console.log('DATABASE CONNECTED SUCCESSFULLY.....'
 )))


// ROUTES
app.use("/url", urlRouter);
app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: { visitHistory: { time: Date.now() } },
        },
        { new: true }  // ✅ returns the updated document
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    // res.json(entry.redirectUrl); // to test
    res.redirect(entry.redirectUrl); // ✅ actual redirect
});


app.delete("/url/:shortid", (req, res) => {

    const shortId = req.params.shortid;
    URL.findOneAndDelete({shortId})
        .then(() => res.json({ message: "Deleted Successfully" }))
        .catch((err) => res.json({ message: err.message }))

})


// TO VIEW THE ANALYTICS OF URL

app.get("/url/analytics/:shortId",async (req,res)=>{
    const shortId=req.params.shortId;
 const result= await URL.findOne({shortId});
 res.json({
    TotalClicks:result.visitHistory.length,
    analytics:result.visitHistory,
 })
})
const port = 8001;
app.listen(port, () => console.log(`Server Started At.. ${port}`));
