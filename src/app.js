const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
app.set("view engine","hbs")
app.use(express.static(path.join(__dirname,"../public")))
hbs.registerPartials(path.join(__dirname,"../views/partial"))
const port = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/temperature",(req,res)=>{
    res.render("temperature")
})

app.listen(port,()=>{
    console.log('conncetion establisg')
})