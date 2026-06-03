import './styles/base.css';
import './styles/layout.css';
import './styles/components/nav.css';
import './styles/sections/hero.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Nav: add .scrolled class when user scrolls past the hero
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// Hero entrance animation — staggers label → title → tagline → scroll hint
gsap.timeline({ delay: 0.3 })
  .to('.hero__label',      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
  .to('.hero__title',      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.6')
  .to('.hero__tagline',    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
  .to('.hero__scroll-hint',{ opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.2');

// Hero parallax — image moves slower than scroll (0.4x speed = parallax depth)
gsap.to('.hero__bg img', {
  yPercent: 15,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
});

// Section reveals — every .reveal element animates in when it enters the viewport
gsap.utils.toArray('.reveal').forEach(el => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  });
});
