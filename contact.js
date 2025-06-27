// Contact Modal Logic
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

if (contactBtn && contactModal && closeModal && contactForm) {
  contactBtn.onclick = () => contactModal.style.display = 'flex';
  closeModal.onclick = () => contactModal.style.display = 'none';
  window.onclick = (e) => {
    if (e.target === contactModal) contactModal.style.display = 'none';
  };

  contactForm.onsubmit = function(e) {
    e.preventDefault();
    // Replace with your email address
    const to = "youremail@example.com";
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent("Portfolio Contact from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    contactModal.style.display = 'none';
    contactForm.reset();
  };
}