class AudioSettings {
    constructor(audioID, musicCheckBoxID, volumeSliderID, volumeIconID) {
        this.audio = document.getElementById(audioID);
        this.musicCheckBox = document.getElementById(musicCheckBoxID);
        this.volumeSlider = document.getElementById(volumeSliderID);
        this.volumeIcon = document.getElementById(volumeIconID);

        this.audio.volume = this.volumeSlider.value / 100;
    //     if (!localStorage.getItem("paused"));
    //         this.audio.play();
    }

    adjustVolume(volume) {
        this.audio.volume = volume;

        if (volume == 0)
            this.volumeIcon.src = "./specs/images/volume-off.png";
        else
            this.volumeIcon.src = "./specs/images/volume-on.png";
            this.toggleMusic();

        localStorage.setItem("volume", volume);
    }

    toggleMusic() {
        if(this.musicCheckBox.checked){
            this.audio.play();
            this.volumeIcon.src = "./specs/images/volume-on.png";
        } else {
            this.audio.pause();
            this.volumeIcon.src = "./specs/images/volume-off.png";
        }
        localStorage.setItem("paused", this.audio.paused);
    }

    toggleVolumeIcon() {
        if (!this.audio.paused) {
            this.audio.pause();
            this.volumeIcon.src = "./specs/images/volume-off.png";
        } else {
            this.audio.play();
            this.volumeIcon.src = "./specs/images/volume-on.png";
        }
        this.musicCheckBox.click();  
        localStorage.setItem("paused", this.audio.paused);
    }
}

function toggleDarkMode() {
    // Retrieve the current dark mode state from Local Storage
    let isDarkMode = localStorage.getItem("darkMode");

    // Toggle the dark mode state
    isDarkMode = !isDarkMode;

    // Update the dark mode state in Local Storage
    localStorage.setItem("darkMode", isDarkMode);

    // Apply the appropriate theme
    applyTheme(isDarkMode);
}

function applyTheme(isDarkMode) {
  let body = document.body;

  // Add or remove the appropriate CSS class based on the dark mode state
  if (isDarkMode) {
    body.classList.add("dark-class");
  } else {
    body.classList.remove("dark-class");
  }
}

function handleStartClick() {
  // Retrieve the dark mode state from Local Storage
  let isDarkMode = localStorage.getItem("darkMode");

  // if the dark mode setting was not toggled before,
  // there wont be anything in local storage
  if (isDarkMode == null)
    isDarkMode = false;

  // Redirect to the new page with the dark mode state as a query parameter
  let url = "../BlueScreen.html?darkMode=" + isDarkMode;
  window.location.href = url;
}

function handleCheckboxChange(checkbox) {
  // Retrieve the checkbox state
  let isDarkMode = checkbox.checked;

  // Update the dark mode state in Local Storage
  localStorage.setItem("darkMode", isDarkMode);

  // Apply the appropriate theme
  applyTheme(isDarkMode);
}

// Get the checkbox element
let darkModeCheckbox = document.getElementById("dark-mode-checkbox");
// Initialize the checkbox state based on the stored dark mode state
let isDarkMode = localStorage.getItem("darkMode");
darkModeCheckbox.checked = isDarkMode === "true";

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}