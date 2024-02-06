let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
for(let i = 0; i < thumbnailItemsDom.length; i++) {
    thumbnailItemsDom[i].addEventListener('click', () => {
        showSlider(i);
    });     
}

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 1000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;


function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);
}






// Get references to the video and play div elements
const video = document.getElementById("myVideo");
const playDiv = document.querySelector(".play");

// Add an event listener to the play div
playDiv.addEventListener("click", function() {
 // Make the video display block
 video.style.display = "block";
   // Set the current time to the start of the video
 video.currentTime = 0;
 // Play the video
 video.play();

 // Request fullscreen mode
 video.requestFullscreen().catch(err => console.log(`Error attempting to enable full-screen mode: ${err.message}`));
});

// Listen for fullscreen change event
document.addEventListener('fullscreenchange', function() {
 // If not in fullscreen mode
 if (!document.fullscreenElement) {
    // Pause the video
    video.pause();
 }
});

// Add an event listener for the ended event
video.addEventListener('ended', function() {
 // Exit fullscreen mode
 if (document.fullscreenElement) {
    document.exitFullscreen();
 }

 // Hide the video
 video.style.display = "none";
});




function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  