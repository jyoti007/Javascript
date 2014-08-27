var https=require('https');

var username='AnkitAneja';


var option = {
host: 'api.github.com',
path: '/users/' + username + '/repos',

method: "GET"
};
var request=https.request(option,function(response){
  var body="";
  response.on("data",function(chunk){
  body += chunk.toString('utf8');
  	console.log("getting Body " );
  });
  	console.log("out of Body ");
        response.on("end",function(){
		console.log("Body " , body);
		
		});

});


request.end();
