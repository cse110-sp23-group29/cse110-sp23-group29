/**
 * Handle the Video Player Click
 * @name handleVideoClick
 */
function handleVideoClick() {
  let video = document.getElementById("video-player");
  let transitionVideo = document.getElementById("fade-in-video");
  let computer = document.getElementsByClassName("image-container")[0];

  // zoom in on computer if window is bigger than 900px.
  // if window is any smaller, the zoom in wont scale right.. will fix later
  if (window.innerWidth > 900) {
    let rangeX = computer.offsetWidth;
    let vw = 0;
    vw = rangeX / Math.min(window.innerWidth, window.innerHeight);
    document.documentElement.style.setProperty('--vw-scale', `${vw}`);
    
    computer.style.transition = "all 600ms ease-in";
    computer.style.transform = "translateY(11%) scale(var(--vw-scale))";
  }
  
  video.play();
  transitionVideo.play();

  setTimeout(function(){
    transitionVideo.classList.add("fadeInAndOut");
  }, 1500);

  video.addEventListener('ended', function() {
      window.location.href = '../StartScreen.html'
  });
}