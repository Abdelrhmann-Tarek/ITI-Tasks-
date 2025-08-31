 
 var circles = document.getElementsByClassName("circle");
var index = 0;

function changeColor() {
 
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "white";
  }


  if (index === 0) {
    circles[0].style.backgroundColor = "red";
  } else if (index === 1) {
    circles[1].style.backgroundColor = "yellow";
  } else if (index === 2) {
    circles[2].style.backgroundColor = "green";
  }

  
  index = (index + 1) % 3;
}


setInterval(changeColor, 1500);







// var circles=document.getElementsByClassName("circle");
// console.log(circles);
// var index=0;
// function changeColor(){
    
    
// }

