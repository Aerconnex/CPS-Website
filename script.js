var vid = document.getElementById("video");
   vid.onended = function() {
   vid.remove()
};
vid.onload = function(){
   vid.muted=False;
}
