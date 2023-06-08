
document.addEventListener("DOMContentLoaded", function() {
  var placeholders = document.querySelectorAll(".card-placeholder");
  var modals = document.querySelectorAll(".modal");
  var closeModalBtns = document.getElementsByClassName("close");
  var submitBtn = document.querySelector(".submit-btn");
  var a = document.querySelector(".input-container");
  var b = document.querySelector(".refresh-btn");
  var buttonClicks = 0;
  var images = [
    "../specs/images/image1.png",
    "../specs/images/image2.png",
    "../specs/images/image3.png",
    "../specs/images/image4.png",
    "../specs/images/image5.png",
    "../specs/images/image6.png",
    "../specs/images/image7.png",
    "../specs/images/image8.png",
    "../specs/images/image9.png",
    "../specs/images/image10.png",
    "../specs/images/image11.png",
    "../specs/images/image12.png",
    "../specs/images/image13.png",
    "../specs/images/image14.png",
    "../specs/images/image15.png",
    "../specs/images/image16.png",
    "../specs/images/image17.png",
    "../specs/images/image18.png",
    "../specs/images/image19.png",
    "../specs/images/image20.png",
    "../specs/images/image22.png",
  ];
  
  // Apply settings
  const audioSettings = new AudioSettings('bg-music', 'music-button', 'volume-slider', 'volume-icon');

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

  let darkMode = localStorage.getItem("darkMode");
  // Apply the appropriate theme or styling based on the dark mode state
  if (darkMode === 'true') {
    document.body.classList.add('dark-class');
  } else {
    document.body.classList.remove("dark-class");
  }

  var cards = document.querySelectorAll(".card");
  var modals = document.querySelectorAll(".modal");
  var closeModalBtns = document.getElementsByClassName("close");
  // Flip the card and show the modal
  cards.forEach(function(card, index) {
    card.addEventListener("click", function() {
      card.classList.toggle("flipped");
      modals[index].style.display = "block";
    });
  });

  // Shuffle the images array
  images = shuffle(images);

  // Function to generate random fortune-telling response
  function generateRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }

  const pastResponses = [
    "You will encounter an old friend unexpectedly.",
    "A past mistake will come back to haunt you.",
    "Financial abundance is coming your way from an unexpected source.",
    "You will find closure for a past emotional wound."
  ];

  const presentResponses = [
    "A new opportunity will present itself to you today.",
    "You will experience a period of growth and personal development.",
    "Your hard work will pay off in your current endeavor.",
    "A decision you make today will have long-lasting consequences."
  ];

  const futureResponses = [
    "You will embark on a great adventure in the near future.",
    "Unexpected challenges will arise, but you will overcome them.",
    "A new romantic relationship will enter your life soon.",
    "You will achieve a major life goal within the next year."
  ];

  // Assign random response to a card and modal
  function assignRandomResponse(responses, modalId) {
    const randomResponse = generateRandomResponse(responses);
    const modal = document.getElementById(modalId);
    const modalResponseElement = modal.querySelector(".response");
    modalResponseElement.textContent = randomResponse;
  }
    submitBtn.addEventListener("click", function() {
        buttonClicks++; // Increment the button clicks counter
        a.style.display = "none";
        b.style.display = "block";
    });

  // Add click event listener to each placeholder
  placeholders.forEach(function(placeholder, index) {

    placeholder.addEventListener("click", function() {
        if (images.length > 0 && buttonClicks >= 1) {
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = images[randomIndex];
            images.splice(randomIndex, 1);

            this.outerHTML = `
                <div id="card${index + 1}" class="card">
                    <div class="card-inner">
                        <div class="card-front" style="background-image: url('../specs/images/image21.png'); background-size: cover; background-position: center; background-color: transparent;"></div>
                        <div class="card-back" style="background-image: url('${randomImage}'); background-size: cover; background-position: center; background-color: transparent;">
                            <div class="card-response"></div>
                        </div>
                    </div>
                </div>
            `;

            assignRandomResponse(getResponsesForCard(index), `modal${index + 1}`);

            var card = document.getElementById(`card${index + 1}`);
            card.addEventListener("click", function() {
                card.classList.toggle("flipped");
                modals[index].style.display = "block";

            });
        }
    });
});

  // Close the modal and flip the card back
  for (var i = 0; i < closeModalBtns.length; i++) {
    closeModalBtns[i].addEventListener("click", function() {
      var modal = this.parentElement.parentElement;
      modal.style.display = "none";
      var index = Array.from(modals).indexOf(modal);
      var card = document.getElementById(`card${index + 1}`);
      card.classList.remove("flipped");
    });
  }

  window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
      var index = Array.from(modals).indexOf(event.target);
      var card = document.getElementById(`card${index + 1}`);
      card.classList.remove("flipped");
    }
  });

  var inputField = document.querySelector(".input-field");

  submitBtn.addEventListener("click", function() {
    var sentence = inputField.value;
    
    if (sentence.trim() !== "") {
      console.log("Submitted sentence:", sentence);
      inputField.value = "";
    }
    a.style.display = "none";
  });

  // Shuffle an array in place
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Get the appropriate responses array for a card based on its index
  function getResponsesForCard(index) {
    if (index === 0) {
      return pastResponses;
    } else if (index === 1) {
      return presentResponses;
    } else if (index === 2) {
      return futureResponses;
    }
  }
  var refreshBtn = document.querySelector(".refresh-btn");
  refreshBtn.addEventListener("click", function() {
    location.reload();
  });
});

