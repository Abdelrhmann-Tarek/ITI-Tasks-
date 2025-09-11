


// var numInp = document.getElementById("numInp");

// var rangeInp = document.getElementById("rangeInp");

// var p = document.getElementById("rangeVal");


// function up(){
//   numInp.stepUp(10)
// }
// function down(){
//   numInp.stepDown(5);
// }

// function test(){
//   // console.log(typeof numInp.valueAsNumber);
//   console.log(dateInp.value);
  
  
// }


// rangeInp.addEventListener("input", function(){
//   p.innerText = rangeInp.value;
// })


var dateInp = document.getElementById("dateInp");



// ============================

// Subtitles --> track
// FullScreen 


var audio = document.querySelector("audio");
var volumeInp = document.getElementById("volumeInp");
var timeInp = document.getElementById("timeInp");
var speed = document.getElementById("speed");


function playPauseAud(e){
  if(audio.paused){
    audio.play();
    e.target.innerText = "Pause"
  }
  else{
    audio.pause();
    e.target.innerText = "Play"

  }
}

function stopAud(){
  audio.load();
  audio.pause();

}

function muteAud(){

  audio.muted = ! audio.muted
}

function Test(){
  console.log(audio.volume);
  
} 


volumeInp.addEventListener("input", function(){
  audio.volume= volumeInp.value;
})


window.onload = function(){
  timeInp.max =  audio.duration;

}


timeInp.addEventListener("change", function(){
   audio.currentTime = timeInp.value
})

audio.addEventListener("timeupdate", function(){
  timeInp.value= audio.currentTime  

})


speed.addEventListener("change", function(){
  audio.playbackRate = speed.value
})