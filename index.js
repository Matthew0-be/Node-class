const express =require("express");
const app = express();
const mongoose = require("mongoose")

require("dotenv").config();

const port = process.env.port;
const mongoDB_URI = process.env.mongoDB_URI;

const student = [
    {
        firstName: "Tony",
        age: 90,
        lastName: "Elumelu"
    },
    {
        firstName: "Matt",
        age: 23,
        lastName: "Galaxy",
    },
    {
        firstName: "Dragon",
        age: 20,
        lastName: "Warrior",
    },
    {
        firstName: "Margnus",
        age: 34,
        lastName: "Carlsen"
    },
    {
        firstName: "Bamidele",
        age: 90,
        lastName: "Ye fang",
    },
    {
        firstName: "Ge",
        age: 180,
        lastName: "fang",
    },
]



app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/student', (req, res)=>{
    res.json(student)
})

app.get('/anything', (req, res) =>{
    res.send('Welcome to Backend class');
});

app.get('/signin', (req, res)=>{
    res.render("signin");
});

app.post("/dashboard", (req, res)=>{
    console.log(req.body);
    res.render("dashboard", { firstName: req.body.firstName });
})

app.get('/Welcome', (req, res)=>{
    res.sendFile(__dirname + "/Welcome.html"); 
});



app.listen(port, ()=> {
    console.log('I am working with node and express');
});


mongoose.connect(mongoDB_URI).then(()=>{
    console.log("Connected");
    
}).catch((err)=>{
    console.log(err);
})