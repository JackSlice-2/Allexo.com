// Select the image in the modal
const modalImage = document.querySelector('.modal-content img');

// Add a click event listener to the image
modalImage.addEventListener('click', function() {
  // Check if the image is already zoomed in
  if (this.classList.contains('zoomed-in')) {
    // If it is, zoom out
    this.style.transform = 'scale(1)';
    this.style.cursor = 'zoom-in';
    this.classList.remove('zoomed-in');
  } else {
    // If it's not, zoom in
    this.style.transform = 'scale(2)';
    this.style.cursor = 'zoom-out';
    this.classList.add('zoomed-in');
  }
});