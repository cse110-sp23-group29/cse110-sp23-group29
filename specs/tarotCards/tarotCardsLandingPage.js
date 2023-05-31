function handleVideoClick() {
  let video = document.getElementById("video-player");
  let imageElement = document.getElementById('image');
  video.play();
  video.addEventListener('ended', function() {
      window.location.href = '../BlueScreen.html'
  });
}