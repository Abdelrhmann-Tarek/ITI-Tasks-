function square(x){
    for (var i=0;i<5; i++){
        x[i]= x[i]*x[i]; 
    }
    return x ;
}
function processArray(x,y){
    
    return y(x);

}


var numbers=[];
for(var i=0;i<5;i++){

    numbers[i]=Number(prompt(`Enter num (${i+1} )`));

}
console.log(processArray(numbers , square));

