
var images= ["images/cat.webp", "images/Dolphin.jpeg", "images/Eagle.jpeg", "images/lion.jpeg"];

var currentIndex = 0; 
var slider;
function showImage(index) {
  slider = document.getElementById("slider");
  slider.src = images[index];
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0; 
  }
  showImage(currentIndex);
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  }
  showImage(currentIndex);
}





 function showData(value, emoji) {
	console.log("Hello after 3 seconds", value, emoji);
}
var time;
var myInterval;
function playImg(){
     myInterval =setInterval(nextImage, 500);
}

function stopImg(){

    clearInterval(myInterval);

}