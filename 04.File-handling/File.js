const fs=require('fs');

// we are crreatig a file by syn method
// fs.writeFileSync("./test.txt","This File is created today by a node developer..")


// we are creting this file by async mtethod ( in that method we have to pass a callback function)
// fs.writeFile("async.txt","Thus file is created by Async method.",()=>{})


// let res=fs.readFileSync("./test.txt","utf-8")
// console.log('result',res);




// fs.readFile("./test.txt",'utf-8',(err,result)=>{
//     if(err){
//         console.log('Error is:',err);
        
//     } else{
//         console.log('result is:',result);
        
//     }
// })


// -----------< Note >

// The difference between asyn and sync is that wsync return the value and we canstoer it in other variable while if we are using the async than it does not retun anything.

// >----------------------------------------


// when we use the writeFIle it overwrite the content that has been in the file so to avoid of that we have to use another method that is fs.appendFile

fs.appendFileSync("./test.txt",`${Date.now()}This value will be append in the file when we will run the project.`)



// this method will copy the file from one location to another location
// fs.copyFileSync("./test.txt","./test_copy.txt")



// fs.unlinkSync("./test_copy.txt")  // this method will delete the file


console.log(

    fs.statSync("./test.txt") // this method will give the information about the file like size of file , when it was created etc
);



fs.mkdirSync("NewFolder/first/second", { recursive: true }) // this method will create the new directory