
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

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
// function toggleDarkMode(checkbox) {
//     const body = document.querySelector('body');
//     // body.classList.toggle('dark-mode');
//     if(checkbox.checked){
//         body.classList.toggle("dark-class");
//     } else {
//         body.classList.remove("dark-class");
//     }
// }

function toggleDarkMode() {
    // Retrieve the current dark mode state from Local Storage
    var isDarkMode = localStorage.getItem("darkMode");
  
    // Toggle the dark mode state
    isDarkMode = !isDarkMode;
  
    // Update the dark mode state in Local Storage
    localStorage.setItem("darkMode", isDarkMode);
  
    // Apply the appropriate theme
    applyTheme(isDarkMode);
  }
  function applyTheme(isDarkMode) {
    var body = document.body;
  
    // Add or remove the appropriate CSS class based on the dark mode state
    if (isDarkMode) {
      body.classList.add("dark-class");
    } else {
      body.classList.remove("dark-class");
    }
  }
  function handleStartClick() {
    // Retrieve the dark mode state from Local Storage
    var isDarkMode = localStorage.getItem("darkMode");
  
    // Redirect to the new page with the dark mode state as a query parameter
    var url = "../BlueScreen.html?darkMode=" + isDarkMode;
    window.location.href = url;
  }
  function handleCheckboxChange(checkbox) {
    // Retrieve the checkbox state
    var isDarkMode = checkbox.checked;
  
    // Update the dark mode state in Local Storage
    localStorage.setItem("darkMode", isDarkMode);
  
    // Apply the appropriate theme
    applyTheme(isDarkMode);
  }
  
  // Get the checkbox element
  var darkModeCheckbox = document.getElementById("dark-mode-checkbox");
  
  // Initialize the checkbox state based on the stored dark mode state
  var isDarkMode = localStorage.getItem("darkMode");
  darkModeCheckbox.checked = isDarkMode === "true";