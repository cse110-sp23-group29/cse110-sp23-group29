// Declaring the selectedArcana object
var selectedArcana = {
    past: [],
    present: [],
    future: []
  };
  
  // Function to validate the form
  function validateForm() {
    // Getting form input values
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var date = document.getElementById("date").value;
    var isValid = true;
  
    // Checking if name is empty
    if (name === "") {
      document.getElementById("name").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("name").classList.remove("error");
    }
  
    // Checking if city is empty
    if (city === "") {
      document.getElementById("city").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("city").classList.remove("error");
    }
  
    // Checking if date is empty
    if (date === "") {
      document.getElementById("date").classList.add("error");
      isValid = false;
    } else {
      document.getElementById("date").classList.remove("error");
    }
  
    // Checking if isValid is true
    if (isValid) {
      document.querySelector(".form-container").style.display = "none";
      document.querySelector(".card-container").style.display = "flex";
    }
  }
  
  // Function to display fortune based on position and card
  function displayFortune(position, card) {
    // Object containing the paths to card images
    var images = {
      "The Fool": "../specs/images/image3.png",
      "The Magician": "../specs/images/image1.png",
      "The High Priestess": "../images/image2.png",
      // ... Include images for other cards
      "The Empress": "../specs/images/image23.png",
      "The Emperor": "../specs/images/image4.png",
      "The Hierophant": "../specs/images/image8.png",
      "The Lovers": "../specs/images/image5.png",
      "The Chariot": "../specs/images/image6.png",
      "Strength": "../specs/images/image7.png",
      "The Hermit": "../specs/images/image9.png",
      "Wheel of Fortune": "../specs/images/image10.png",
      "Justice": "../specs/images/image11.png",
      "The Hanged Man": "../specs/images/image12.png",
      "Death": "../specs/images/image13.png",
      "Temperance": "../specs/images/image14.png",
      "The Devil": "../specs/images/image22.png",
      "The Tower": "../specs/images/image15.png",
      "The Star": "../specs/images/image18.png",
      "The Moon": "../specs/images/image16.png",
      "The Sun": "../specs/images/image17.png",
      "Judgment": "../specs/images/image19.png",
      "The World": "../specs/images/image20.png",
    };
  
    // Object containing the available arcana for each position
    var arcana = {
      past: [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgment",
        "The World"
      ],
      present: [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgment",
        "The World"
      ],
      future: [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgment",
        "The World"
      ]
    };
  
    // Filtering the available arcana for the given position
    var availableArcana = arcana[position].filter(function(card) {
      return (
        !selectedArcana.past.includes(card) &&
        !selectedArcana.present.includes(card) &&
        !selectedArcana.future.includes(card)
      );
    });
  
    // Displaying an alert if no more arcana is available for the position
    if (availableArcana.length === 0) {
      alert("No more arcana available for this position.");
      return;
    }
  
    var cardBack = card.querySelector(".card-back");
  
    // Selecting a random card from the available arcana
    var randomIndex = Math.floor(Math.random() * availableArcana.length);
    var selectedCard = availableArcana[randomIndex];
    var imageSrc = images[selectedCard];
    cardBack.style.backgroundImage = "url('" + imageSrc + "')";
  
    // Adding the selected card to the selectedArcana object
    selectedArcana[position].push(selectedCard);
  
    // Object containing fortunes for each arcana in past, present, and future
    var fortunes = {
      past: {
        "The Fool": "You have experienced a significant turning point in the past that shaped your current path.",
        "The Magician": "Your past actions have influenced your current circumstances, empowering you with creative abilities.",
        "The High Priestess": "Your past experiences have heightened your intuition and inner knowledge.",
        "The Empress": "a",
        "The Emperor": "a",
        "The Hierophant": "a",
        "The Lovers": "a",
        "The Chariot": "a",
        "Strength": "a",
        "The Hermit": "a",
        "Wheel of Fortune": "a",
        "Justice": "a",
        "The Hanged Man": "a",
        "Death": "a",
        "Temperance": "a",
        "The Devil": "a",
        "The Tower": "a",
        "The Star": "a",
        "The Moon": "a",
        "The Sun": "a",
        "Judgment": "a",
        "The World": "a",
      },
      present: {
        "The Fool": "You are currently at the beginning of a new journey filled with unlimited potential.",
        "The Magician": "The present moment is a time of manifestation and utilizing your skills and resources effectively.",
        "The High Priestess": "Your intuition and inner wisdom are guiding you through the present situation.",
        "The Empress": "a",
        "The Emperor": "a",
        "The Hierophant": "a",
        "The Lovers": "a",
        "The Chariot": "a",
        "Strength": "a",
        "The Hermit": "a",
        "Wheel of Fortune": "a",
        "Justice": "a",
        "The Hanged Man": "a",
        "Death": "a",
        "Temperance": "a",
        "The Devil": "a",
        "The Tower": "a",
        "The Star": "a",
        "The Moon": "a",
        "The Sun": "a",
        "Judgment": "a",
        "The World": "a",
      },
      future: {
        "The Fool": "The future holds new adventures and opportunities for growth and exploration.",
        "The Magician": "You will have the ability to manifest your desires and achieve success in the future.",
        "The High Priestess": "Your intuition will play a crucial role in guiding you through future challenges.",
        "The Empress": "a",
        "The Emperor": "a",
        "The Hierophant": "a",
        "The Lovers": "a",
        "The Chariot": "a",
        "Strength": "a",
        "The Hermit": "a",
        "Wheel of Fortune": "a",
        "Justice": "a",
        "The Hanged Man": "a",
        "Death": "a",
        "Temperance": "a",
        "The Devil": "a",
        "The Tower": "a",
        "The Star": "a",
        "The Moon": "a",
        "The Sun": "a",
        "Judgment": "a",
        "The World": "a",
      }
    };
  
    var fortune = fortunes[position][selectedCard];
  
    // Displaying the fortune based on the selected position and card
    if (position === "past") {
      document.getElementById("pastFortune").textContent = fortune;
      document.querySelector(".bottom-left").style.display = "block";
      document.querySelector(".top-left").style.pointerEvents = "none";
      document.querySelector(".bottom-left").style.pointerEvents = "none";
    } else if (position === "present") {
      document.getElementById("presentFortune").textContent = fortune;
      document.querySelector(".bottom-middle").style.display = "block";
      document.querySelector(".top-middle").style.pointerEvents = "none";
      document.querySelector(".bottom-middle").style.pointerEvents = "none";
    } else if (position === "future") {
      document.getElementById("futureFortune").textContent = fortune;
      document.querySelector(".bottom-right").style.display = "block";
      document.querySelector(".top-right").style.pointerEvents = "none";
      document.querySelector(".bottom-right").style.pointerEvents = "none";
    }
  }
  
  // Function to flip the card
  function flipCard(card) {
    card.classList.toggle("flip");
  }
  