const video = document.getElementById("video");
const videoContainer = document.getElementById("video-container");
const main = document.querySelector('main')

video.onended = function() {
  videoContainer.classList.add("hidden"); 
  document.body.style.overflow = 'auto'; 
  main.style.overflow = 'auto'; 
};
