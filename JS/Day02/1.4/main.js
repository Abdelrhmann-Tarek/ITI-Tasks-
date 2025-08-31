function ascending(x,y){  // 5 2 55 1 66 ,  2 5 1 55 66 , 2 1 5 55 66 , 1 2 5 55 66 
    return x-y;

}
function desscending(x,y){    // 5 2 55 1 66 ,  5  55 2  66 1  , 55 5 66 2 1 m 55 66 5 2 1 , 66 55 5 2 1 
 
    return y-x;

}
var result;

var userInput=[];
for(i=0;i<5;i++){
    userInput[i]=prompt(`enter value number${i+1}`);
 


}

var result= userInput.sort(ascending);
console.log(result);
var result= userInput.sort(desscending);
