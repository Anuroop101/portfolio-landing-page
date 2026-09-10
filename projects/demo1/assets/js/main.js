/**
 * main.js — Voss Studio
 * Navigation, mobile menu, and portfolio tabs
 */

(function () {
  'use strict';

  // ── Navigation scroll behavior ──
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (nav && scrollY > 10) {
      nav.classList.add('nav--scrolled');
    } else if (nav) {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Initial state


  // ── Mobile Menu ──
  const hamburger = document.querySelector('.nav__hamburger');
  let mobileMenu = document.getElementById('mobile-menu');

  // Inner pages also get the mobile menu, even when they only define the
  // desktop navigation in their markup.
  if (hamburger && !mobileMenu) {
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'mobile-menu';
    mobileMenu.setAttribute('role', 'dialog');
    mobileMenu.setAttribute('aria-label', 'Mobile navigation');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.innerHTML = [
      ...Array.from(document.querySelectorAll('.nav__links a')).map(link => link.outerHTML),
      '<a href="contact.html" class="btn btn--primary" style="margin-top: var(--space-lg);">Book a consultation</a>'
    ].join('');
    document.body.appendChild(mobileMenu);
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('mobile-menu--open');
      if (isOpen) {
        mobileMenu.classList.remove('mobile-menu--open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.add('mobile-menu--open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('mobile-menu--open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]');
      if (!email || !email.checkValidity()) {
        if (email) email.focus();
        return;
      }
      newsletterForm.innerHTML = '<p class="caption" role="status">Thanks — you’re on the list.</p>';
    });
  }

  // Reveal content as it enters the viewport. The CSS keeps content visible
  // when JavaScript is unavailable and disables motion for reduced-motion users.
  function setupRevealAnimations() {
    document.documentElement.classList.add('motion-ready');
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'home';
    document.body.dataset.page = pageName;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.classList.add('hero--animated');
      requestAnimationFrame(function () { hero.classList.add('is-visible'); });
    }
    const revealTargets = document.querySelectorAll('main > section:not(.hero), .reveal');

    revealTargets.forEach(function (element, index) {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', Math.min(index % 3, 2) * 70 + 'ms');
    });

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach(function (element) { element.classList.add('is-visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries, revealObserver) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

    revealTargets.forEach(function (element) { observer.observe(element); });
  }

  setupRevealAnimations();

  // ── Process Timeline Scroll Animation ──
  function setupTimelineScroll() {
    const timeline = document.getElementById('process-timeline');
    const fill = document.getElementById('process-fill');
    
    if (!timeline || !fill) return;
    
    window.addEventListener('scroll', function() {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      const scrollTrigger = windowHeight * 0.6; // Bar starts filling when timeline enters bottom 40%
      
      let progress = 0;
      
      if (timelineTop > scrollTrigger) {
        progress = 0;
      } else if (timelineTop + timelineHeight < scrollTrigger) {
        progress = 100;
      } else {
        progress = ((scrollTrigger - timelineTop) / timelineHeight) * 100;
      }
      
      fill.style.height = progress + '%';
    });
    
    // Initial call to set state
    window.dispatchEvent(new Event('scroll'));
  }
  setupTimelineScroll();


  // ── Portfolio Tabs ──
  const tabs = document.querySelectorAll('.tab-btn');
  const imgElement = document.getElementById('portfolio-img-element');
  const titleElement = document.getElementById('portfolio-title');
  const descElement = document.getElementById('portfolio-desc');

  // Portfolio content data
  const portfolioData = {
    'full-home': {
      title: 'Tailored Full Home Renovations',
      desc: 'Enjoy a completely cohesive design journey for your entire property. We ensure every room speaks the same language while serving its unique purpose.',
      image: 'assets/images/portfolio_bathroom.png'
    },
    'living': {
      title: 'Curated Living Spaces',
      desc: 'From statement fireplaces to custom joinery, we design living rooms that balance elegance with absolute comfort for everyday lounging or hosting.',
      image: 'assets/images/hero_living_room.png'
    },
    'kitchen': {
      title: 'Functional & Beautiful Kitchens',
      desc: 'The heart of the home deserves the best. We create kitchens that are a joy to cook in, combining durable materials with timeless aesthetics.',
      image: 'assets/images/portfolio_kitchen.png'
    },
    'bedroom': {
      title: 'Restful Bedroom Retreats',
      desc: 'Sanctuaries designed for rest. We focus on soothing palettes, layered textures, and clever storage to keep your personal space uncluttered.',
      image: 'assets/images/portfolio_bedroom.png'
    }
  };

  if (tabs.length && imgElement && titleElement && descElement) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        // Remove active class from all tabs
        tabs.forEach(t => {
          t.classList.remove('tab-btn--active');
          t.setAttribute('aria-selected', 'false');
        });

        // Add active class to clicked tab
        this.classList.add('tab-btn--active');
        this.setAttribute('aria-selected', 'true');

        // Update content
        const target = this.getAttribute('data-target');
        const data = portfolioData[target];

        if (data) {
          // Quick fade effect
          imgElement.style.opacity = '0';
          titleElement.style.opacity = '0';
          descElement.style.opacity = '0';

          setTimeout(() => {
            imgElement.src = data.image;
            titleElement.textContent = data.title;
            descElement.textContent = data.desc;

            imgElement.style.opacity = '1';
            titleElement.style.opacity = '1';
            descElement.style.opacity = '1';
          }, 200);
        }
      });
    });

    // Add transition styling
    [imgElement, titleElement, descElement].forEach(el => {
      el.style.transition = 'opacity 0.2s ease-in-out';
    });
  }

})();
