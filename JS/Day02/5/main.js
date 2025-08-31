function add (x,y){

    return x+y;
}
function sub (x,y){

    return x-y;
}
function multiply (x,y){

    return x*y;
}
function division (x,y){

    return x/y;
}
function operation (x , y , z){
    z();
    
     return z(x , y );

    
}

// var firstNum = 0 ;
// var secondNum =0 ; 

 var firstNum = Number(prompt (" Enter first Number ... ")); 
 var secondNum = Number(prompt("Enter second Number..."));


 console.log(operation(firstNum,secondNum,add));
 console.log(operation(firstNum,secondNum,sub));
 console.log(operation(firstNum,secondNum,multiply));
 console.log(operation(firstNum,secondNum,division));


