function getAnswer() {
    const question = document.getElementById("question").value;
    if (question) {
      const answers = [
          "Signs point to yes",
          "The universe says no",
          "Absolutely positively",
          "I wouldn't count on it",
          "Highly doubtful",
          "The outlook is good",
          "The outlook is not so good",
          "Reply hazy, try again",
          "Ask a different question",
          "Better not tell you now",
          "Concentrate and ask again",
          "Very doubtful",
          "You may rely on it",
          "It is decidedly so",
          "As I see it, yes",
          "As I see it, no",
          "Most definitely",
          "Very likely",
          "Not in a million years",
          "Chances are high",
          "Chances are low",
          "It is possible",
          "It is unlikely",
          "Focus and ask again",
          "Indications say yes",
          "Indications say no",
          "Absolutely not",
          "It's a long shot",
          "It's unclear, ask again",
          "Cannot say now",
          "Definitely",
          "It is not certain",
          "The odds are in your favor",
          "The odds are against you",
          "Maybe someday",
          "Maybe tomorrow",
          "Maybe next week",
          "Maybe next year",
          "The answer is within you",
          "The answer is in your heart",
          "The answer is in your mind",
          "The answer is closer than you think",
          "The answer lies ahead",
          "The answer lies behind",
          "The answer is right in front of you",
          "Follow your instincts",
          "Follow your heart",
          "Follow your dreams",
          "Anything is possible"
      ];
      const randomIndex = Math.floor(Math.random() * answers.length);
      const answer = answers[randomIndex];
      document.getElementById("answer").innerText = answer;
    }
  }
  
