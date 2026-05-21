// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuOverlay = document.getElementById('menuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function openMenu() { mobileMenu.classList.add('active'); menuOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeMenu() { mobileMenu.classList.remove('active'); menuOverlay.classList.remove('active'); document.body.style.overflow = ''; }

hamburger.addEventListener('click', openMenu);
mobileMenuClose.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));

// ===== MENU FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.product-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    menuCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'heroIn 0.4s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== FESTIVAL POPUP =====
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.getElementById('popupClose');
setTimeout(() => popupOverlay.classList.add('active'), 3000);
popupClose.addEventListener('click', () => popupOverlay.classList.remove('active'));
popupOverlay.addEventListener('click', e => { if (e.target === popupOverlay) popupOverlay.classList.remove('active'); });

// ===== FLOATING PARTICLES =====
const particlesContainer = document.querySelector('.particles');
if (particlesContainer) {
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 18 + 8;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${Math.random()*6+5}s;opacity:${Math.random()*0.4+0.1}`;
    particlesContainer.appendChild(p);
  }
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const phone = document.getElementById('formPhone').value;
    // Firebase Firestore integration — add your config here
    alert(`Thank you ${name}! We'll get back to you soon on ${phone}.`);
    contactForm.reset();
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});
