// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple alert for form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
});
