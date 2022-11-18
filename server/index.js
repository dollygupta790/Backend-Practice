var express=require("express");
var bodyparser=require('body-parser');
var app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    // res.send(home.html);
    res.sendFile(__dirname+"/Pages/Home.html");
});
app.get("/Home",(req,res)=>{
    res.redirect("/");
});
app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname+"/Pages/Contact.html");
});
app.get("/About",(req,res)=>{
    res.sendFile(__dirname+"/Pages/About.html");
});
app.get("/Blog",(req,res)=>{
    res.sendFile(__dirname+"/Pages/Blog.html");
});
app.post("/sendvalues",(req,res)=>{
    // res.send(req.body);
    var n1=req.body.number;
    var n2=req.body.number;
    var n3=n1+n2;
    res.send(n3);

});
app.listen(3060);