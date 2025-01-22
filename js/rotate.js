 const rotatingText = document.getElementById('rotating-text');
const textOptions = ['Empathy','Excellence', 'Community', 'Comfort'];
let currentTextIndex = 0;

setInterval(() => {
  currentTextIndex = (currentTextIndex + 1) % textOptions.length;
  rotatingText.textContent = textOptions[currentTextIndex];
}, 500);