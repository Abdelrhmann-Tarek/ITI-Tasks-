var userName = "";
var phoneNum=0;
var mobileNum ="";
var mobileVal= /(010|011|012)/;
var email="";
var emailVal=/^[a-z]{3}@[0-9]{3}\.com$/i;

for(var i =0 ; !isNaN(userName);i++){  //Name

userName=prompt("Enter Your Name...");

}
for(var i =0 ;isNaN(phoneNum)||phoneNum.length!=8;i++ ){  //Phone number
 phoneNum=prompt("Enter Your Phone Number...");

}

for(i=0;!mobileVal.test(mobileNum)||mobileNum.length!=11;i++){ // mobile number

 mobileNum=prompt("Enter Your Mobile Number...");

}

for(i=0;!emailVal.test(email);i++){  //email
 email=prompt("Enter Your Email...");

}

var userColor = prompt("red, green or blue");   //text color

    document.writeln('<h1 style="color:' + userColor + '">Welcome dear  '+ userName+' </h1>');
     document.writeln('<h1  style="color:' + userColor + '">your telephone number is'+phoneNum+' </h1>');
     document.writeln('<h1 style="color:' + userColor + '">your mobile number is'+mobileNum+' </h1>');
     document.writeln('<h1 style="color:' + userColor + '">your email address is'+email+' </h1>');


    





