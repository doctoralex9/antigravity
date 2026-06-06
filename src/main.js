import './styles/base.css';
import './styles/layout.css';
import './styles/components/nav.css';
import './styles/sections/hero.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mobile hamburger menu
const hamburger    = document.getElementById('nav-hamburger');
const overlay      = document.getElementById('nav-overlay');
const overlayClose = document.getElementById('nav-overlay-close');
const overlayLinks = document.querySelectorAll('.nav__overlay-link');
const overlayRes   = document.getElementById('nav-overlay-reserve');

gsap.set(overlay, { clipPath: 'inset(0 0 100% 0)' });
gsap.set([...overlayLinks, overlayRes], { opacity: 0, y: 24 });

const menuTl = gsap.timeline({ paused: true })
  .to(overlay, { clipPath: 'inset(0 0 0% 0)', duration: 0.65, ease: 'power3.inOut' })
  .to([...overlayLinks, overlayRes], {
    opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08
  }, '-=0.25');

const openMenu = () => {
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  menuTl.play();
};

const closeMenu = () => {
  menuTl.reverse();
  setTimeout(() => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }, 650);
};

hamburger.addEventListener('click', openMenu);
overlayClose.addEventListener('click', closeMenu);
overlayLinks.forEach(link => link.addEventListener('click', closeMenu));
overlayRes.addEventListener('click', closeMenu);

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

// Section image reveals — clip-path wipe from bottom
gsap.utils.toArray('.section__media').forEach(el => {
  gsap.fromTo(el,
    { clipPath: 'inset(100% 0% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    }
  );
});

// Room cards — staggered reveal
gsap.utils.toArray('.card').forEach((card, i) => {
  gsap.fromTo(card,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      delay: i * 0.15,
    }
  );
});

// Section image parallax — subtle depth as you scroll past each section
gsap.utils.toArray('.section__media img').forEach(img => {
  gsap.fromTo(img,
    { yPercent: -5 },
    {
      yPercent: 5,
      ease: 'none',
      scrollTrigger: {
        trigger: img.closest('.section'),
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    }
  );
});
