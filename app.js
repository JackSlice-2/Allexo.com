let currentIndex =  0;
const items = document.querySelectorAll('.carousel .list .item');
const thumbnails = document.querySelectorAll('.carousel .thumbnail .item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showItem(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

function showThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.style.opacity = i === index ? '1' : '0.5';
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex +  1) % items.length;
  showItem(currentIndex);
  showThumbnail(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex -  1 + items.length) % items.length;
  showItem(currentIndex);
  showThumbnail(currentIndex);
});

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = i;
    showItem(currentIndex);
    showThumbnail(currentIndex);
  });
});

// Show the first item on page load
showItem(currentIndex);
showThumbnail(currentIndex);



let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeRunning =  1000;
let runTimeOut;

for(let i =  0; i < thumbnailItemsDom.length; i++) {
    thumbnailItemsDom[i].addEventListener('click', () => {
        showSlider(i);
    });     
}

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

function showSlider(type){
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length -  1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length -  1]);
    }
    carouselDom.classList.add('next');
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
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
  