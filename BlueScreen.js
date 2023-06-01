// Function to generate random fortune-telling response
function generateRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }
  
  // Array of fortune-telling responses for each card
  const pastResponses = [
    "You will encounter an old friend unexpectedly.",
    "A past mistake will come back to haunt you.",
    "Financial abundance is coming your way from an unexpected source.",
    "You will find closure for a past emotional wound.",
  ];
  
  const presentResponses = [
    "A new opportunity will present itself to you today.",
    "You will experience a period of growth and personal development.",
    "Your hard work will pay off in your current endeavor.",
    "A decision you make today will have long-lasting consequences.",
  ];
  
  const futureResponses = [
    "You will embark on a great adventure in the near future.",
    "Unexpected challenges will arise, but you will overcome them.",
    "A new romantic relationship will enter your life soon.",
    "You will achieve a major life goal within the next year.",
  ];
  
  // Function to assign random response to a card
  function assignRandomResponse(cardId, responses) {
    const card = document.getElementById(cardId);
    const responseElement = card.querySelector(".card-response");
    const randomResponse = generateRandomResponse(responses);
    responseElement.textContent = randomResponse;
  }
  
  // Function to assign random responses to the cards
  function assignRandomResponses() {
    assignRandomResponse("past-card", pastResponses);
    assignRandomResponse("present-card", presentResponses);
    assignRandomResponse("future-card", futureResponses);
  }
  
  // Event listener for the DOMContentLoaded event
  document.addEventListener("DOMContentLoaded", function() {
    assignRandomResponses();
  });
  
  
  
  