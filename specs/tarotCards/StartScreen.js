
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
    else {
        audioSettings.audio.play();
        audioSettings.volumeIcon.src = "./specs/images/volume-on.png";
    }

    // if the audio is paused but the music checkbox is checked, uncheck it
    if (audioSettings.audio.paused && audioSettings.musicCheckBox.checked) 
        audioSettings.musicCheckBox.click();

    if (localStorage.getItem("darkMode") === 'true')
        document.body.classList.add("dark-class");
    else
        document.body.classList.remove("dark-class");
});