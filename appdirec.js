var nodemailer=require('nodemailer');
var fs =require('fs');
var email="<ankit.vti@gmail.com>,<jyoti.gupta@daffodilsw.com>"
var transport=nodemailer.createTransport("SMTP",{

service:"Gmail",
auth:{
user:"gupta.jyoti54@gmail.com",
pass:"Love parents"
}
}
);
transport.sendMail(
{
from:"<gupta.jyoti54@gmail.com>",
to:"<gupta.jyoti54@gmail.com>",
text:"hello this is an exmple for sending mail with attachment",
subject:"node mailer sender",

 attachments : [{'filename': 'text1.txt','contents':'aGVsbG8gd29ybGQh','encoding':'base64'}]
},function(error, response){  //callback
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   transport.close(); 
   }
);
