/**
 * Compact, accessible testimonial carousel.
 */
(function () {
  'use strict';

  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.testimonial-carousel__slide'));
  const previous = carousel.querySelector('[data-testimonial-prev]');
  const next = carousel.querySelector('[data-testimonial-next]');
  const current = carousel.querySelector('#testimonial-current');
  const client = carousel.querySelector('#testimonial-client');
  const project = carousel.querySelector('#testimonial-project');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeIndex = 0;
  let timer;

  function setActive(index) {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach(function (slide, slideIndex) {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    const activeSlide = slides[activeIndex];
    current.textContent = String(activeIndex + 1).padStart(2, '0');
    client.textContent = activeSlide.dataset.client;
    project.textContent = activeSlide.dataset.project;
  }

  function stopAutoPlay() {
    window.clearInterval(timer);
  }

  function startAutoPlay() {
    if (reduceMotion) return;
    stopAutoPlay();
    timer = window.setInterval(function () { setActive(activeIndex + 1); }, 7000);
  }

  previous.addEventListener('click', function () {
    setActive(activeIndex - 1);
    startAutoPlay();
  });

  next.addEventListener('click', function () {
    setActive(activeIndex + 1);
    startAutoPlay();
  });

  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
  carousel.addEventListener('focusin', stopAutoPlay);
  carousel.addEventListener('focusout', startAutoPlay);

  setActive(0);
  startAutoPlay();
})();
