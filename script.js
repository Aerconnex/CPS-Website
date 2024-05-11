const video = document.getElementById('video');

function Appear() {
  video.style.display = 'block';
  video.play();
}

function Dissaperate() {
  video.style.display = 'none';
}

video.addEventListener('ended', function() {
  Dissaperate();
});

window.onload = function() {
  Appear();
};
