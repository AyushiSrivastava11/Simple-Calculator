const express= require("express");
const app =express();

const bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended:true})); //url-encoded

app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
    var n1= Number(req.body.num1);
    var n2= Number(req.body.num2);
    var result= n1+n2;
    res.send("The Result is "+ result);
    // console.log(req.body.num2);
    // res.send("Thank you for coming here");
});

//BMI

app.get("/bmiCalculator.html",function(req,res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(req,res){
    var W= Number(req.body.weight);
    var H= Number(req.body.height);  //use parseNumber(req.body.height) for float 
    var n= W/(H*H);
    res.send("Your BMI is "+ n);
    // console.log(req.body.num2);
    // res.send("Thank you for coming here");
})
app.listen(3000,function()
{
    console.log("Loading...");
});