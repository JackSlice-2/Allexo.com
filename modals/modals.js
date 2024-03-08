
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