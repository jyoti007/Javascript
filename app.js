var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');
var app=express();

var mongoose = require('mongoose/');
mongoose.connect('mongodb://localhost/MyDatabase');
var Schema = mongoose.Schema;
var UserDetail = new Schema({
    username: String,
    password: String
}, {
    collection: 'userInfo'
});
var UserDetails = mongoose.model('userInfo', UserDetail);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + 'views'));

app.get('/login',function(req,res){
res.send('login.html');
});

app.get('/signup',function(req,res){
res.sendfile('views/signup.html');
});


app.post('/sign',function(req,res){
   console.log('Sign : userdata' + JSON.stringify(req.body));
    var data = JSON.stringify(req.body)    ;
	               console.log(req.body.username)  ;

    var cool = new UserDetails(req.body);
    cool.save(function(error){

    if(error)
        console.log("error");
    else
       console.log("success");

        }
        );
   res.sendfile('views/login.html');

});
app.listen(3000);