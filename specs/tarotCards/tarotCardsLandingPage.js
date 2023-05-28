// tarotCardsLandingPage
function handleVideoClick() {
    let video = document.getElementById("video-player");
    let imageElement = document.getElementById('image');
    video.play();
    video.addEventListener('ended', function() {
        video.style.display = 'none';
        imageElement.src = '../specs/images/ComputerScreenDefault.png';
        showCards();
    });
}
function showCards() {
  var cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    card.style.display = "block";
  });
}

//Card and Flip card and show pop up screen(modal)
document.addEventListener("DOMContentLoaded", function() {
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
  });