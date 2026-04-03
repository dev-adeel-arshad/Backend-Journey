

const express=require("express");
const app= express();
const multer  = require('multer')
const path=require("path")
app.use(express.urlencoded({extended:false}));


//SETTING VIEWS COMPONENT
app.set("view engine","ejs");
app.set("views", path.resolve("./views"));

//FOLDER FOR THE UPLOADS
// const upload = multer({ dest: 'uploads/' });

// USING DISK STORAGE

const storage=multer.diskStorage({
    destination: function(req,fileLoader,callback){
       return callback(null, "./uploads")
    },
    filename: function(req,file,callback){
        callback(null,`${Date.now()}-${file.originalname}`)
    }

});

const upload=multer({storage})

// SETTING ROUTES
app.get("/",(req,res)=>{
    res.render("home")
});

app.post("/upload",upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'coverImage', maxCount: 8 }]),(req,res)=>{

});
const port=8000;

app.listen(port,()=> console.log('Server started......')

)