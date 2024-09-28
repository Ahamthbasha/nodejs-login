const express=require("express")
const app=express()
const hbs=require('hbs')
const nocache=require("nocache")
const session=require("express-session")
app.use(express.static("public"))
app.set("view engine","hbs")
app.use(express.json())
const userRoute = require("./Routes/user")
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:"keyboard cat",
    resave:false,
    saveUninitialized:true
}))
app.use(nocache())
app.use("/",userRoute)
//predefined password and username
/*
1st time
app.get("/",((req,res)=>{
    res.render("login")//it goes to login hbs front end
}))
//if user enter correct password.user will see the home page.*/
//2time

app.listen(3000,()=>{
    console.log("server running at 3000")
})