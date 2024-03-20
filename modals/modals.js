
window.onload = function() {
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the image and insert it inside the modal
    var imgs = document.getElementsByClassName("myImg");
    var modalImg = document.getElementById("img01");
  
    // Loop through all images
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    }
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }
  }

  

  window.onload = function() {
    // Get the modal
    var modal = document.getElementById("myModal");
  
    // Get the image and insert it inside the modal
    var imgs = document.getElementsByClassName("myImg");
    var modalImg = document.getElementById("img01");
  
    // Loop through all images
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    }
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }

    // Add event listeners to the image
    modalImg.onclick = function() {
      var currentWidth = modalImg.clientWidth;
      modalImg.style.width = (currentWidth + 20) + "px"; // Increase the width by 20px
    }

    modalImg.oncontextmenu = function(e) {
      e.preventDefault(); // Prevent the context menu from showing
      var currentWidth = modalImg.clientWidth;
      if (currentWidth > 20) { // Prevent the image from disappearing completely
        modalImg.style.width = (currentWidth - 20) + "px"; // Decrease the width by 20px
      }
    }
  }