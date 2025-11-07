

// const http=require('http')
const fs=require("fs")
// const url=require("url")
const express=require("express")


const app=express()

app.get('/',(req,res)=>{
    res.send("Hello From the Home Page.")
})

// we can add here query also
app.get('/about',(req,res)=>{
    res.send(`Hello From the About Page.And Your name is ${req.query.name}`)
})
// app.post('',(req,res));

// if we are using the express framework than it makes the code modular and easy to read and we can get of may dependencies as these all are built in express js.
console.log('Expressjs Is easy to use and handle.');


// myserver=http.createServer((req,res)=>{

// let log=`Time Of request is:${Date.now()}\n url of request is :"${req.url}".\n`
// if(req.url === "/favicon.ico") return res.end()

//     const myurl=url.parse(req.url,true)
//     console.log('myurl is',myurl);

// fs.appendFile("log.txt",log,(err,data)=>{
//     switch(myurl.pathname){
//         case "/":
//         res.end("home page")
//         break
//         case "/about":
//             const username=myurl.query.username
//              res.end(`Hi!! we warmly welcome  ${username}`)
//         break
//         default:
//         res.end("404 not found")
//     }
// })



// });

// myserver.listen(8000,()=>{
//     console.log("Server started at port 8000");
// });

app.listen("8000",()=>{
    console.log("Server Has Been Started....")
})