
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
function toggleDarkMode(checkbox) {
    const body = document.querySelector('body');
    // body.classList.toggle('dark-mode');
    if(checkbox.checked){
        body.classList.toggle("dark-class");
    } else {
        body.classList.remove("dark-class");
    }
    // var darkModeCheckbox = document.getElementById("dark-mode-checkbox");
    // var isDarkMode = darkModeCheckbox.checked;
  
    // // Store the dark mode state in Local Storage
    // localStorage.setItem("darkMode", isDarkMode);
}
// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve the dark mode state from Local Storage
//     var isDarkMode = localStorage.getItem("darkMode");
    
//     // Apply the dark mode state
//     var darkModeCheckbox = document.getElementById("dark-mode-checkbox");
//     darkModeCheckbox.checked = isDarkMode === "true";
    
//     // Apply the appropriate theme based on the dark mode state
//     applyTheme(isDarkMode);
//   });

// function applyTheme(isDarkMode) {
//     if (isDarkMode) {
//         document.body.classList.add("dark-class");
//     } else {
//         document.body.classList.remove("dark-class");
//     }
// }

// const darkModeCheckbox = document.querySelector('#dark-mode-checkbox');
// darkModeCheckbox.addEventListener('change', toggleDarkMode);
  
