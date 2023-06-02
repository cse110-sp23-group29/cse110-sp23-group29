document.addEventListener("DOMContentLoaded", function() {
  var placeholders = document.querySelectorAll(".card-placeholder");
  var modals = document.querySelectorAll(".modal");
  var closeModalBtns = document.getElementsByClassName("close");
  var images = [
    "../specs/images/jester_0.png",
    "../specs/images/jester_3.png",
    "../specs/images/new-computer.png"
  ];

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
  function assignRandomResponse(cardId, responses, modalId) {
    const card = document.getElementById(cardId);
    const responseElement = card.querySelector(".card-response");
    const randomResponse = generateRandomResponse(responses);
    responseElement.textContent = randomResponse;

    const modal = document.getElementById(modalId);
    const modalResponseElement = modal.querySelector(".response");
    modalResponseElement.textContent = randomResponse;
  }

  // Add click event listener to each placeholder
  placeholders.forEach(function(placeholder, index) {
    placeholder.addEventListener("click", function() {
      if (images.length > 0) {
        var randomIndex = Math.floor(Math.random() * images.length);
        var randomImage = images[randomIndex];

        images.splice(randomIndex, 1);

        this.outerHTML = `
          <div id="card${index + 1}" class="card">
            <div class="card-inner">
              <div class="card-front" style="background-image: url('${randomImage}')">
              </div>
              <div class="card-back">
                <div class="card-response"></div>
              </div>
            </div>
          </div>
        `;

        assignRandomResponse(`card${index + 1}`, getResponsesForCard(index), `modal${index + 1}`);

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
});

  