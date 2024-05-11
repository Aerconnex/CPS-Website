const video = document.querySelector('video');

function Appear() {
  video.style.display = 'block';
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
