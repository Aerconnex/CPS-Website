document.getElementById("video").addEventListener('ended', function() {
  this.parentNode.removeChild(this);
});
