
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

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = i;
    showItem(currentIndex);
  });
});
showItem(currentIndex);




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

