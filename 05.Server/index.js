

const http=require('http')
const fs=require("fs")

myserver=http.createServer((req,res)=>{

let log=`Time Of request is:${Date.now()}\n url of request is :"${req.url}".\n`
fs.appendFile("log.txt",log,(err,data)=>{
    switch(req.url){
        case "/":
        res.end("home page")
        break
        case "/about": res.end("about page")
        break
        default:
        res.end("404 not found")
    }
})



});

myserver.listen(8000,()=>{
    console.log("Server started at port 8000");
});