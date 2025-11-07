

const http=require('http')
const fs=require("fs")
const url=require("url")


myserver=http.createServer((req,res)=>{

let log=`Time Of request is:${Date.now()}\n url of request is :"${req.url}".\n`
if(req.url === "/favicon.ico") return res.end()

    const myurl=url.parse(req.url,true)
    console.log('myurl is',myurl);

fs.appendFile("log.txt",log,(err,data)=>{
    switch(myurl.pathname){
        case "/":
        res.end("home page")
        break
        case "/about":
            const username=myurl.query.username
             res.end(`Hi!! we warmly welcome  ${username}`)
        break
        default:
        res.end("404 not found")
    }
})



});

myserver.listen(8000,()=>{
    console.log("Server started at port 8000");
});