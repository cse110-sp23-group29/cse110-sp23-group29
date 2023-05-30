function handleVideoClick() {
  let video = document.getElementById("video-player");
  let imageElement = document.getElementById('image');
  video.play();
  video.addEventListener('ended', function() {
      video.style.display = 'none';
      imageElement.src = '../specs/images/ComputerScreenDefault.png';
  });
}