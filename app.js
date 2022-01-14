const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));
app.get("/",function(req,res){

    res.sendFile(__dirname + "/index.html");
})

app.get("/products",function(req,res){

    res.sendFile(__dirname + "/product.html");
})

app.get("/contact",function(req,res){

    res.sendFile(__dirname + "/contact.html");
})


app.listen(process.env.PORT || 3000,function(){

    console.log("App running at port 3000");
})