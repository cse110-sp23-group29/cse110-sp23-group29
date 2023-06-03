
const audio = new Audio('../specs/audio/testMusic.mp3');
const musicButton = document.getElementById('music-button');

window.addEventListener("load", function() {
    audio.play();

    if (audio.paused && musicButton.checked) {
        musicButton.click();
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

function handleStartClick() {
    window.location.href = '../BlueScreen.html'
}

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
