// In this we will learn about middlewares
// middlewares can change the req and res objects, they can also end the req-res cycle and they can also call the next middleware in the stack
// if we will not call next() than the request will be stuck there only and will not go to the next middleware or route handler

const express = require('express');
let users = require("./RandomData.json")

app.use(express.urlencoded({ extended: true }))//first middleware

// we can make our custom middleware as

app.use((req,res,next)=>{
    // we can add somevalues with the request as
    req.myname = "malik";// and i can access it throughout that file
    console.log("Custom Middleware number 1");
    next();
})

app.use("/api/users",(req,res,next)=>{
    // now this will render first that page and than shift the control to next middleware
    console.log("Custom Middleware number 2");
    console.log(req.myname);//malik`
    next();
})
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});



const port = 8000;
app.listen(port, () => {
    console.log('Server started.......');

})