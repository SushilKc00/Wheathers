const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"../public")))
hbs.registerPartials(path.join(__dirname,"../views/partial"))

app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/temperature",(req,res)=>{
    res.render("temperature")
})

app.listen(8000,()=>{
    console.log('conncetion establisg')
})