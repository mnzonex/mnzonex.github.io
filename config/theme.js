/**
 * MN-ZONEX 2.0 - Theme Configuration
 * All global colors, fonts, and animation settings in one place
 */

const theme = {
  // 🌈 Colors
  colors: {
    primary: "#00e5ff",        // Main neon color
    secondary: "#0e0e0e",      // Background dark
    cardBg: "#151515",          // Card background
    cardHover: "#00e5ff55",     // Card hover shadow
    text: "#ffffff",            // Default text
    textLight: "#ccc",          // Secondary text
    border: "#222",             // Card / container borders
    footerBg: "#111",
    navbarBg: "#111",
    heroBgGradient: "radial-gradient(circle, #1a1a1a, #000)",
  },

  // 🖋 Fonts
  fonts: {
    main: '"Segoe UI", sans-serif',
    headings: '"Segoe UI Bold", sans-serif',
    monospace: '"Courier New", monospace'
  },

  // 🎨 Animations
  animation: {
    duration: 0.5,           // seconds
    easing: "ease-in-out",   // hover, scroll animations
    hoverScale: 1.05,        // card hover scale
    shadowGlow: "0 0 20px #00e5ff55", // card hover glow
    fadeInDuration: 0.8,
    fadeInEasing: "ease-in",
    staggerDelay: 0.1        // for list items / cards
  },

  // 🖼 Images / branding
  branding: {
    logo: "assets/images/branding/logo.png",
    favicon: "assets/images/branding/favicon.ico"
  },

  // ⚙ Features toggle
  features: {
    enableAnimations: true,
    enableSpinWheel: true,
    enableMiniGames: true,
    enableFeedback: true
  }
};

// Optional: Make theme global
// Load theme
const t = window.MN_ZONEX_THEME;

// Apply global fonts
document.body.style.fontFamily = t.fonts.main;
document.querySelectorAll('h1, h2, h3, h4, h5').forEach(h => {
  h.style.fontFamily = t.fonts.headings;
});

// Navbar and Footer colors
document.querySelector('header.navbar').style.backgroundColor = t.colors.navbarBg;
document.querySelector('footer').style.backgroundColor = t.colors.footerBg;

// Hero section
const hero = document.querySelector('.hero');
if(hero){
  hero.style.background = t.colors.heroBgGradient;
}

// Cards hover animation
document.querySelectorAll('.card, .service-card, .game-card, .feedback-card').forEach(card => {
  if(t.features.enableAnimations){
    card.addEventListener('mouseover', () => {
      card.style.transform = `scale(${t.animation.hoverScale})`;
      card.style.boxShadow = t.animation.shadowGlow;
    });
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = 'none';
    });
  }
});

// Feedback stars dynamic color
document.querySelectorAll('.feedback-card .rating').forEach(star => {
  star.style.color = t.colors.primary;
});

// Optional: stagger fade-in for cards
document.querySelectorAll('.card, .service-card, .game-card').forEach((card, index) => {
  if(t.features.enableAnimations){
    card.style.opacity = 0;
    setTimeout(() => {
      card.style.transition = `opacity ${t.animation.fadeInDuration}s ${t.animation.fadeInEasing}`;
      card.style.opacity = 1;
    }, index * (t.animation.staggerDelay * 1000));
  }
});