const express= require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function(){
    console.log("server started on 3000");
});

app.post("/bmicalculator", function(req, res){
    console.log(req.body);
    var height= parseFloat(req.body.height);
    var weight= parseFloat(req.body.weight);
    var result = weight/(height*height);
    res.send("Yor BMI index is " + result);
});