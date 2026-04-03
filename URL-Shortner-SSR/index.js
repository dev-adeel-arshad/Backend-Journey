const express = require('express');
const connectDB = require("./connection.js");
const path = require("path");

const app = express();
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter.js");
const URL = require("./models/url.js");
const { getAllUrl } = require('./controllers/url.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// SETTING SERVER VIEW COMPONENT
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));


// RENDERING THE PAGE (HOME)
app.get("/test", async (req, res) => {
    const allurls = await URL.find({});
    return res.render("home", { allurls });
});


// DB Connection
connectDB("mongodb://127.0.0.1:27017/URL-shortner")
    .then(() => console.log('DATABASE CONNECTED SUCCESSFULLY.....'));


// ROUTES
app.use("/", staticRoute);
app.use("/url", urlRoute);
app.get("/allurls", getAllUrl);
app.delete("/delall", async (req, res) => {
    await URL.deleteMany({});
    console.log("All URLs deleted successfully!");
    res.json({ message: "All URLs deleted successfully!" });
});

// SERVER
const port = 8001;
app.listen(port, () => console.log(`Server Started At.. ${port}`));
