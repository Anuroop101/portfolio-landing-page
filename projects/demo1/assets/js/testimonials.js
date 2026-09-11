/**
 * Mobile Testimonial Slider (Crossfade)
 */
document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.mobile-testimonial-slider');
  const track = document.querySelector('.mobile-testimonial-slider__track');
  const prevBtn = document.querySelector('.mobile-testimonial-slider__controls .prev');
  const nextBtn = document.querySelector('.mobile-testimonial-slider__controls .next');

  if (!sliderContainer || !track || !prevBtn || !nextBtn) return;

  // 1. Gather the 6 unique cards from the desktop marquee
  const leftCards = Array.from(document.querySelectorAll('.marquee-track--left .marquee-content:first-child .bento-card'));
  const rightCards = Array.from(document.querySelectorAll('.marquee-track--right .marquee-content:first-child .bento-card'));
  const allCards = [...leftCards, ...rightCards];

  if (allCards.length === 0) return;

  // 2. Clone and inject them into the mobile track
  const mobileCards = allCards.map((card) => {
    const clone = card.cloneNode(true);
    clone.style = ''; // clear any inline styles from desktop
    track.appendChild(clone);
    return clone;
  });

  // 3. Slider Logic - Crossfade
  let currentIndex = 0;
  let isAnimating = false;

  function goToSlide(newIndex) {
    if (isAnimating || newIndex === currentIndex) return;
    isAnimating = true;

    const currentCard = mobileCards[currentIndex];
    const nextCard = mobileCards[newIndex];

    // Trigger crossfade: current exits, next enters SIMULTANEOUSLY
    currentCard.classList.remove('is-active');
    currentCard.classList.add('is-exiting');
    
    nextCard.classList.remove('is-exiting');
    nextCard.classList.add('is-active');
    
    currentIndex = newIndex;

    // Reset exiting state after transition completes (400ms in CSS)
    setTimeout(() => {
      currentCard.classList.remove('is-exiting');
      isAnimating = false;
    }, 400); 
  }

  // Initialize
  mobileCards[0].classList.add('is-active');

  // Event Listeners
  prevBtn.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + mobileCards.length) % mobileCards.length;
    goToSlide(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % mobileCards.length;
    goToSlide(newIndex);
  });
});
