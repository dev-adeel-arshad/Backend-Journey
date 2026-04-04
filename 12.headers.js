/*

Headers are used to provide information about the request or response, or about the object sent in the message body.they are like additional information for examplemif sent a post via courier a post man than we write an address like from:    to:   weight etc same are the headers. we can write our custome headers and can also access the default headers as following:


*/

// In this we will learn about middlewares

const express = require('express');
let users = require("./RandomData.json")
app.use(express.urlencoded({ extended: true }))//first middleware

// we can make our custom middleware as
// if we want to add header for the request than we can do that by writing the headers in keys on the server's request headers


app.use((req, res, next) => {
    // it is good practice to write custom headers starting with x- so that it does not conflict with default headers
   res.setHeader("x-MyName", "User1")
   // we can accesss the request headers as
   console.log('Req headers are',req.headers);

    console.log(`${req.method} ${req.url}`);
    next();
});



const port = 8000;
app.listen(port, () => {
    console.log('Server started.......');

})