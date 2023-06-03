
document.addEventListener("DOMContentLoaded", function() {
  // Apply settings
  let audio = document.getElementById("bg-music");
  audio.volume = Number(localStorage.getItem("volume"));
  
  let paused = localStorage.getItem("paused");
  
  if (paused == "true") {
    audio.pause();
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

    // Close the modal and flip the card back
    for (var i = 0; i < closeModalBtns.length; i++) {
      closeModalBtns[i].addEventListener("click", function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
        var index = Array.from(modals).indexOf(modal);
        cards[index].classList.remove("flipped");
      });
    }

    window.addEventListener("click", function(event) {
      if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
        var index = Array.from(modals).indexOf(event.target);
        cards[index].classList.remove("flipped");
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
});