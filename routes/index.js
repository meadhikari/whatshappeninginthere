 var request = require('request');
 exports.index = function(req, res){
 	res.header("Access-Control-Allow-Origin", "*");
 	request("https://api.forecast.io/forecast/34037c5326f9355481c5967b36dded27/"+req.params.latlng, function (error, response, html) {
 		if (!error && response.statusCode == 200) {
 			data  = JSON.parse(html);
 			res.send(data)
 			
 		}
 	});
 	
 };