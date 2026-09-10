/**
 * slider.js — Voss Studio
 * Before/After comparison slider
 * §1.6: drag handle with transition: none on the line itself (mechanical, precise)
 */

(function () {
  'use strict';

  const sliders = document.querySelectorAll('.comparison-slider');

  sliders.forEach(function (slider) {
    const beforeWrap = slider.querySelector('.comparison-slider__before-wrap');
    const handle = slider.querySelector('.comparison-slider__handle');
    if (!beforeWrap || !handle) return;

    let isDragging = false;

    function getPosition(e) {
      if (e.touches && e.touches.length > 0) {
        return e.touches[0].clientX;
      }
      return e.clientX;
    }

    function updateSlider(clientX) {
      const rect = slider.getBoundingClientRect();
      if (!rect.width) return;
      let x = clientX - rect.left;

      // Clamp to slider bounds
      x = Math.max(0, Math.min(x, rect.width));

      const percent = (x / rect.width) * 100;

      // Update CSS variable for the container
      slider.style.setProperty('--percent', percent + '%');
      slider.dataset.percent = String(percent);

      // Update ARIA
      handle.setAttribute('aria-valuenow', Math.round(percent));

      // GA4 custom event (debounced — only fire on start)
      if (!slider.dataset.interacted) {
        slider.dataset.interacted = 'true';
        if (typeof gtag === 'function') {
          gtag('event', 'slider_interaction', {
            slider_id: slider.id
          });
        }
      }
    }

    slider.querySelectorAll('img').forEach(function (img) {
      img.draggable = false;
    });

    // Pointer events unify mouse, trackpad, pen, and touch input and prevent
    // browsers from dragging the underlying PNG instead of the comparison.
    slider.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      isDragging = true;
      updateSlider(e.clientX);
      slider.setPointerCapture(e.pointerId);
    });

    slider.addEventListener('pointermove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      updateSlider(e.clientX);
    });

    function stopDragging(e) {
      isDragging = false;
      if (e && slider.hasPointerCapture(e.pointerId)) {
        slider.releasePointerCapture(e.pointerId);
      }
    }

    slider.addEventListener('pointerup', stopDragging);
    slider.addEventListener('pointercancel', stopDragging);

    // Touch fallback for older browsers without Pointer Events.
    slider.addEventListener('touchstart', function (e) {
      if ('PointerEvent' in window) return;
      isDragging = true;
      updateSlider(getPosition(e));
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if ('PointerEvent' in window || !isDragging) return;
      updateSlider(getPosition(e));
    }, { passive: false });

    document.addEventListener('touchend', function () {
      if (!('PointerEvent' in window)) isDragging = false;
    });

    // Keyboard support for accessibility
    handle.addEventListener('keydown', function (e) {
      const rect = slider.getBoundingClientRect();
      const currentPercent = parseFloat(slider.dataset.percent) || 50;
      let newPercent = currentPercent;

      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        newPercent = Math.max(0, currentPercent - 2);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        newPercent = Math.min(100, currentPercent + 2);
      }

      if (newPercent !== currentPercent) {
        const x = (newPercent / 100) * rect.width + rect.left;
        updateSlider(x);
      }
    });

    // Initialize at 50%
    function initSlider() {
      const rect = slider.getBoundingClientRect();
      if (rect.width > 0) {
        updateSlider(rect.left + rect.width / 2);
      }
    }

    // Wait for images to load before initializing
    const images = slider.querySelectorAll('img');
    let loaded = 0;

    images.forEach(function (img) {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) initSlider();
      } else {
        img.addEventListener('load', function () {
          loaded++;
          if (loaded === images.length) initSlider();
        });
      }
    });

    // Fallback init
    setTimeout(initSlider, 1000);
  });

})();
