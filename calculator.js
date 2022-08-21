const express= require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("server started on 3000");
});

app.post("/", function(req, res){
    console.log(req.body);
    res.send("Thanks for posting that");
});