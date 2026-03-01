// Scroll Reveal Animation
function reveal() {
  const reveals = document.querySelectorAll(".reveal-on-scroll");
  const windowHeight = window.innerHeight;
  const elementVisible = 150;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
      const icon = menuBtn.querySelector('i');
      if (navLinks.classList.contains('mobile-active')) {
        icon.classList.replace('fa-bars-staggered', 'fa-xmark');
      } else {
        icon.classList.replace('fa-xmark', 'fa-bars-staggered');
      }
    });
  }
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// Floating neon particles on background
function createParticles() {
  const container = document.body;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'neon-particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: var(--primary);
      border-radius: 50%;
      top: ${Math.random() * 100}vh;
      left: ${Math.random() * 100}vw;
      opacity: ${Math.random() * 0.5};
      pointer-events: none;
      z-index: -1;
      filter: blur(1px);
      transition: all ${Math.random() * 10 + 5}s linear;
    `;
    container.appendChild(p);

    setInterval(() => {
      p.style.top = Math.random() * 100 + 'vh';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.opacity = Math.random() * 0.5;
    }, 10000);
  }
}

// Protection against unauthorized copying
document.addEventListener('contextmenu', (e) => {
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
  e.preventDefault();
});

document.addEventListener('keydown', (e) => {
  // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
    (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83))
  ) {
    e.preventDefault();
  }
});

// Easter egg: Konami code
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.keyCode === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      alert('🎉 MN-ZONEX 2.0: Hidden Mode Activated!');
      document.documentElement.style.setProperty('--primary', '#ff00cc');
      document.documentElement.style.setProperty('--primary-glow', 'rgba(255, 0, 204, 0.5)');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavbarScroll();
  createParticles();
  window.addEventListener('scroll', reveal);
  reveal(); // Initial check
});
