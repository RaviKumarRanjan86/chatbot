var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    request("http://34.208.118.103/wcfserviceCustomer.svc/Getdeliverycity/", function(error, response, body){
        if(!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.send(data["City"]["City"]);
        }
    });
});
        
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App has started!!!");
});