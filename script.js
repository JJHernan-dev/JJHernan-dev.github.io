// ===== Portfolio JS =====

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 40, 200)}ms`;
  io.observe(el);
});

// Navbar shadow al scrollear
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) navbar.style.boxShadow = '0 8px 30px -20px rgba(0,0,0,0.6)';
  else navbar.style.boxShadow = 'none';
});
