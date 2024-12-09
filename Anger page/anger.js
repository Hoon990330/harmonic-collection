let angle = 0;
const backgroundElement = document.querySelector('.striped-background');

function animateBackground() {
  angle += 0.5; 
  backgroundElement.style.backgroundPosition = `${Math.sin(angle) * 20}px ${Math.cos(angle) * 20}px`;
  requestAnimationFrame(animateBackground); 
}


animateBackground();