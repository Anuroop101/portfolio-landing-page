/**
 * filters.js — Voss Studio
 * Portfolio grid filtering by room type
 */

(function () {
  'use strict';

  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio__card');

  if (!filterButtons.length || !portfolioCards.length) return;

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      // Update active button
      filterButtons.forEach(function (b) {
        b.classList.remove('filter-btn--active');
      });
      this.classList.add('filter-btn--active');

      // Filter cards
      portfolioCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.setAttribute('data-hidden', 'false');
          card.style.display = '';
        } else {
          card.setAttribute('data-hidden', 'true');
          card.style.display = 'none';
        }
      });
    });
  });

  // Portfolio card click — navigate to project page
  portfolioCards.forEach(function (card) {
    card.addEventListener('click', function () {
      // In production: navigate to /project/[slug]
      // For now, link to the project.html template
      window.location.href = 'project.html';
    });

    // Keyboard support
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        window.location.href = 'project.html';
      }
    });
  });

})();
