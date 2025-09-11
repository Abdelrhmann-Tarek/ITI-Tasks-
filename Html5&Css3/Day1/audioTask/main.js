 var audio = document.querySelector("audio");
 var audioPlayer=document.getElementById("audio-play");
 var volumeInput = document.getElementById("sound-range");
 var timeInput = document.getElementById("time-range");
 var audioSongs=['./media/Anitek_-_Komorebi.mp3',
    './media/Song-1.mp3',
    './media/Song-2.mp3',
    './media/Song-3.mp3'
];
var currentIndex=0;
var display=document.getElementById("current-time");
var totalTime=document.getElementById("total-time");
// ================================================================
function playPause(e){
    if(audio.paused){ 
        
        audio.play();
        // tottalTime();
        // curTime();

        // e.target.innerText ="Pause"
    
    }else {
        audio.pause();
        // curTime();
        // tottalTime();

        // e.target.innerText ="Play"
        
    }


 }

 function stopAudio(){
     audio.load();
     audio.pause();
 }

 volumeInput.addEventListener("input",function(){
    audio.volume=volumeInput.value;
 }
)

timeInput.addEventListener("input",function(){

    audio.currentTime=timeInput.value;
})

audio.onloadedmetadata(function(e){
console.log(e)
});
function nextAudio(){
    currentIndex =( currentIndex +1 )%audioSongs.length;
    audio.src = audioSongs[currentIndex];
    audio.play();
    
}
function previosAudio(){
    currentIndex = (currentIndex-1+audioSongs.length)%audioSongs.length;
    audio.src=audioSongs[currentIndex];
    audio.play();
}
// function tottalTime(){
//         totalTime=Math.floor(audio.duration/60);
//          totalTime+=audio.duration%totalTime;
//         console.log(totalTime);
        


// }
// function curTime(){
//     currentTime=audio.currentTime;
//     console.log(currentTime);
// }
// currentTime.ontimeupdate(function(){
//         curTime();
//         currentTime.textContent=currentTime;
// })

//  audio.addEventListener("timeupdate", function () {
//     const currentTime = Math.floor(audio.currentTime);
//     display.textContent = `Current time: ${currentTime} seconds`;
//   });




 