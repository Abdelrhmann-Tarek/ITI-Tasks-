function circleArea(radius){
    return (console.log(Math.PI *(radius*radius)));
}
function squareRoot(num){
 return  alert(`square root of ${num}is ${Math.sqrt(num)}`) ;
}
function cosValue(angel){ 
return (console.log(`cos ${angel}° is ${Math.cos(angel*(Math.PI/180  ))}`));
}



var circleRadius=Number(prompt("Enter radius..."));
circleArea(circleRadius);
var number = Number(prompt("Enter number..."));
squareRoot(number);
var angel =Number(prompt("Enter ANgel ,,"));
cosValue(angel);