class AudioSettings {
/**
 * Audio Settings Constructor
 * @param audioID - ID for audio
 * @param musicCheckBoxID - Music Toggle ID
 * @param volumeSliderID  - Volume Slider ID
 * @param volumeIconID - Volume Toggle Icon ID
 */
    constructor(audioID, musicCheckBoxID, volumeSliderID, volumeIconID) {
        this.audio = document.getElementById(audioID);
        this.musicCheckBox = document.getElementById(musicCheckBoxID);
        this.volumeSlider = document.getElementById(volumeSliderID);
        this.volumeIcon = document.getElementById(volumeIconID);

        this.audio.volume = this.volumeSlider.value / 100;
    //     if (!localStorage.getItem("paused"));
    //         this.audio.play();
    }
    /**
     * Adjustor for Volume
     * @name adjustVolume
     * @param {number} volume 
     */
    adjustVolume(volume) {
        this.audio.volume = volume;

        if (volume == 0)
            this.volumeIcon.src = "./specs/images/volume-off.png";
        else
            this.volumeIcon.src = "./specs/images/volume-on.png";
            this.toggleMusic();

        localStorage.setItem("volume", volume);
    }
    /**
     * On and Off toggle for Music
     * @name toggleMusic
     */
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
    /**
     * Music Toggle Icon Control
     * @name toggleVolumeIcon
     */
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

/**
 * Toggle for Dark Mode Selection
 * @name toggleDarkMode
 */
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
/**
 * Function to Trigger Dark Mode Theme Shift
 * @name applyTheme
 * @param {boolean} isDarkMode 
 */
function applyTheme(isDarkMode) {
  let body = document.body;

  // Add or remove the appropriate CSS class based on the dark mode state
  if (isDarkMode) {
    body.classList.add("dark-class");
  } else {
    body.classList.remove("dark-class");
  }
}
/**
 * Retrieve DarkMode Toggle State and determine theme
 * @name handleStartClick
 */
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
/**
 * Set Local Storage based on Dark Mode Checkbox toggle
 * @name handleCheckboxChange
 */
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
/**
 * @type {boolean} 
 */
let isDarkMode = localStorage.getItem("darkMode");
darkModeCheckbox.checked = isDarkMode === "true";

/**
 * Open Popup function
 * @name openPopup
 */
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

/**
 * Close Popup function
 * @name closePopup
 */
function closePopup() {
    document.getElementById("popup").style.display = "none";
}