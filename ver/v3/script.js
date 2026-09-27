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

// ===== Transición de color del grid: azul -> naranja al bajar =====
const gridBlue = [140, 170, 255];
const gridOrange = [255, 146, 48];
const glowBlue = [59, 130, 246];
const glowOrange = [249, 115, 22];

const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
const rgba = (c, a) => `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`;

const root = document.documentElement;
let rafId = null;

function updateGridColor() {
  rafId = null;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;

  // La transición ocurre alrededor de la mitad de la página (20% -> 65%)
  const t = Math.min(1, Math.max(0, (progress - 0.2) / 0.45));
  const eased = t * t * (3 - 2 * t);

  const line = mix(gridBlue, gridOrange, eased);
  const glow = mix(glowBlue, glowOrange, eased);

  root.style.setProperty('--grid-line', rgba(line, 0.05 + eased * 0.15));
  root.style.setProperty('--grid-line-strong', rgba(line, 0.09 + eased * 0.05));
  root.style.setProperty('--accent-glow', rgba(glow, 0.28));
}

function onScrollGrid() {
  if (rafId === null) rafId = requestAnimationFrame(updateGridColor);
}

window.addEventListener('scroll', onScrollGrid, { passive: true });
window.addEventListener('resize', onScrollGrid);
updateGridColor();
