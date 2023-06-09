
const audioSettings = new AudioSettings('bg-music', 'music-button', 'volume-slider', 'volume-icon');

window.addEventListener("load", function() {

    audioSettings.volumeSlider.addEventListener("input", (e) => {
        audioSettings.adjustVolume(e.currentTarget.value / 100);
    });

    audioSettings.musicCheckBox.addEventListener('change', () => {
        audioSettings.toggleMusic();
    });

    audioSettings.volumeIcon.addEventListener('click', () =>{
        audioSettings.toggleVolumeIcon();
    });
    
    // if audio should be paused, pause and change volume icon
    if (localStorage.getItem("paused")) {
        audioSettings.audio.pause();
        audioSettings.volumeIcon.src = "./specs/images/volume-off.png";
    }
    localStorage.setItem("paused", audio.paused);
});

const volumeSlider = document.getElementById('volume-slider');
audio.volume = volumeSlider.value / 100;

localStorage.setItem("volume", volumeSlider.value / 100);
localStorage.setItem("paused", audio.paused);

volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.currentTarget.value / 100;
    localStorage.setItem("volume", audio.volume);
});

 function playMusic(checkbox){
     if(checkbox.checked){
         audio.play();
     } else {
         audio.pause();
     }
     localStorage.setItem("paused", audio.paused);
 }

 var isAudioPlaying = true;

 function toggleVolume() {
     var volumeIcon = document.getElementById("volumeIcon");
    
     if (isAudioPlaying) {
         audio.pause();
         volumeIcon.src = "./specs/images/volume-off.png";
         isAudioPlaying = false;
         musicButton.checked = false; 
     } else {
         audio.play();
         volumeIcon.src = "./specs/images/volume-on.png";
         isAudioPlaying = true;
         musicButton.checked = true; 
     }
 }

    if (localStorage.getItem("darkMode") === 'true')
        document.body.classList.add("dark-class");
    else
        document.body.classList.remove("dark-class");
});