const phrases = [
    "I feel calm and at peace",
    "A wave of tranquility washes over me",
    "Everything feels balanced and steady",
    "My heart feels light and content",
    "I am surrounded by a sense of calmness",
    "Peace fills every corner of my mind",
    "I feel a deep sense of relaxation",
    "My thoughts are quiet, and my soul is at ease"
  ];
  
  function createFallingPhrase() {
    const phrase = document.createElement("div"); 
    phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)]; 
    phrase.className = "phrase"; 
    phrase.style.left = Math.random() * window.innerWidth + "px"; 
    phrase.style.animationDuration = Math.random() * 3 + 2 + "s"; 
    phrase.style.animationDelay = Math.random() * 5 + "s"; 
    document.body.appendChild(phrase); 
  
    phrase.addEventListener("animationend", () => {
      document.body.removeChild(phrase);
    });
  }
  

  function initFallingPhrases() {
    setInterval(createFallingPhrase, 500); 
  }
  
  initFallingPhrases(); 