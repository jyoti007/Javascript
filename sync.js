var fs=require("fs");
var http=require("http");
console.log("started");
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/html"});
  data= fs.readFileSync("abc.html");
console.log(data);
res.write(data);
console.log("finshed");

fs.watch("abc.html",function(previous,next){
console.log("changed");
data= fs.readFileSync("abc.html");
console.log(data);
console.log(" waiting changed");

});


res.end();

}).listen(3000);

console.log("finshed");
