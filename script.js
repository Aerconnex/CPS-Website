const video = document.getElementById("video");
const videoContainer = document.getElementById("video-container");
const parallax = document.getElementById("parallax");
const main = document.querySelector('main')

video.onended = function() {
  videoContainer.classList.add("hidden"); 
  parallax.classList.remove("hidden"); 
  document.body.style.overflow = 'auto'; 
  main.style.overflow = 'auto'; 
};
