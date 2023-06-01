function handleStartClick() {
    window.location.href = '../BlueScreen.html'
}

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

let audio = new Audio('../specs/audio/testMusic.mp3');
window.addEventListener("load", function() {
    audio.play();
});

const volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener("input", (e) => {
    audio.volume = e.currentTarget.value / 100;
});

const musicButton = document.getElementById('music-button');
if (musicButton.checked)
    audio.play();

// If screen is refreshed, the music pauses. This is unavoidable behavior
// Uncheck the music settings box since it is set as checked by defeult in the HTMLs
if (audio.paused)
    musicButton.click();

function playMusic(checkbox){
    if(checkbox.checked){
        audio.play();
    } else {
        audio.pause();
    }
}

