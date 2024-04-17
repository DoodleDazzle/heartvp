const envelope = document.querySelector('.valentines-day');
const text = document.querySelector('.text');
const heart = document.querySelector('.heart');

let timeoutId;

function openEnvelope() {
  // Show the heart and text
  text.style.transition = 'none';
  heart.style.transition = 'none';
  text.style.transform = 'translate(-50%, -150px)';
  heart.style.transform = 'translateY(-100px) rotate(-45deg)';
  
  // Clear any previous timeout
  clearTimeout(timeoutId);

  // Set a timeout to reset the heart and text after 5 seconds
  timeoutId = setTimeout(() => {
    text.style.transition = 'transform 0.5s';
    heart.style.transition = 'transform 0.5s';
    text.style.transform = 'none';
    heart.style.transform = 'none';
  }, 5000);
}

// Add event listener for clicking on the envelope
envelope.addEventListener('click', openEnvelope);
