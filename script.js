var video = document.getElementById("video");
var videoContainer = document.getElementById("video-container");
var parallax = document.getElementById("parallax");

video.onended = function() {
  videoContainer.classList.add("hidden"); 
  parallax.classList.remove("hidden"); 
  document.body.style.overflow = 'auto'; 
};
