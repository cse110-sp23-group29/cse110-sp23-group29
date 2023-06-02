// BlueScreen.js
document.addEventListener("DOMContentLoaded", function() {
    var placeholders = document.querySelectorAll(".card-placeholder");
    var modals = document.querySelectorAll(".modal");
    var closeModalBtns = document.getElementsByClassName("close");
    var images = [
      "../specs/images/card1.png",
      "../specs/images/jester_3.png",
      "../specs/images/new-computer.png"
    ];
  
    // Shuffle the images array
    images = shuffle(images);
  
    // Add click event listener to each placeholder
    placeholders.forEach(function(placeholder, index) {
      placeholder.addEventListener("click", function() {
        // Check if there are available images
        if (images.length > 0) {
          // Get the first image and remove it from the array
          var randomIndex = Math.floor(Math.random() * images.length);

          // Get the random image from the array
          var randomImage = images[randomIndex];
  
          // Remove the selected image from the array
          images.splice(randomIndex, 1);
  
          // Replace the placeholder with the card and set the background image
          this.outerHTML = `
            <div id="card${index + 1}" class="card">
              <div class="card-inner">
              <div class="card-front" style="background-image: url('${randomImage}'); background-size: cover;">
                </div>
              </div>
            </div>
          `;
  
          // Add click event listener to the new card
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
    var submitBtn = document.querySelector(".submit-btn");
  
    submitBtn.addEventListener("click", function() {
      var sentence = inputField.value;
      if (sentence.trim() !== "") {
        console.log("Submitted sentence:", sentence);
        // Perform desired action with the submitted sentence
        inputField.value = "";
      }
    });
  
    // Shuffle an array in place
    function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  });
  