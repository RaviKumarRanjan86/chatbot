
var request = require('request');

console.log("Sunset in Hawaii is at...");
request("http://34.208.118.103/wcfserviceCustomer.svc/Getdeliverycity/", function(error, response, body){
    if(!error && response.statusCode == 200){
       console.log(body);
      
    }
});