
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.onclick = (e) => {
  if (e.target == contactModal) {
    contactModal.style.display = 'none';
  }
};

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent (not really, but you look good today)');
  contactModal.style.display = 'none';
  this.reset();
});
