
var fs=require("fs");
var http=require("http");
console.log("started");
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type":"text/html"});
   fs.writeFile("abc.html","heloo world");
   fs.readFile("abc.html",function(error,data){
console.log(data);
res.write(data);
res.end();
});
}).listen(3000);

console.log("finshed");
