const express = require("express")
const fs = require("fs")
const multer = require("multer")
const path = require("path")

const app = express()

app.set("view engine","ejs")

app.use(express.static("public"))
app.use("/uploads", express.static("uploads"))
app.use(express.urlencoded({extended:true}))

const DATA_PATH = "./data/posts.json"

function readPosts(){
    return JSON.parse(fs.readFileSync(DATA_PATH))
}

function writePosts(data){
    fs.writeFileSync(DATA_PATH, JSON.stringify(data,null,2))
}

/* ---------- IMAGE STORAGE ---------- */

const storage = multer.diskStorage({

    destination: function(req,file,cb){
        cb(null,"uploads/")
    },

    filename: function(req,file,cb){
        const unique = Date.now() + path.extname(file.originalname)
        cb(null,unique)
    }

})

const upload = multer({storage})

/* ---------- ROUTES ---------- */

app.get("/",(req,res)=>{
    res.render("home",{user:"User_Name"})
})

app.get("/archive",(req,res)=>{
    const posts = readPosts()
    res.render("archive",{posts})
})

app.get("/submit",(req,res)=>{
    res.render("submit")
})

app.post("/submit", upload.single("image"), (req,res)=>{

    const posts = readPosts()

    const newPost = {

        title:req.body.title,
        author:req.body.author,
        content:req.body.content,
        image: req.file ? "/uploads/" + req.file.filename : null
    }

    posts.push(newPost)

    writePosts(posts)

    res.redirect("/archive")

})

app.get("/profile",(req,res)=>{
    const posts = readPosts()
    res.render("profile",{user:"User_Name",posts})
})

app.get("/manifesto",(req,res)=>{
    res.render("manifesto")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})