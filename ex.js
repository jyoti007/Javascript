var express=require('express');
var app=express();



app.use(express.static(__dirname + '/meanapp'));

app.get('/',function(req,res){
res.send("hello");
});


app.get('/new/:text',function(req,res){

res.send("hello"+  req.params.text);
});

var user={
"1":{"name":"jyoti"},
"2":{"lastName":"gupta"}

}
app.get('/user/:id',function(req,res){


var use=user[req.params.id];
console.log(use);
if(use && req.params.id==1 )
{
res.send(use.name);

}
else if(use && req.params.id==2 )
{
res.send(use.lastName);

}
else
{
res.send("not found");
}

});

app.listen(3000);