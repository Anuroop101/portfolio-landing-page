/**
 * form.js — Voss Studio
 * Multi-step contact form
 * §15: Starts at lowest-commitment question, escalates to contact details
 */

(function () {
  'use strict';

  const formContainer = document.getElementById('contact-form');
  if (!formContainer) return;

  const steps = formContainer.querySelectorAll('.form-step');
  const dots = formContainer.querySelectorAll('.form-steps__dot');
  const nextBtn = document.getElementById('form-next');
  const backBtn = formContainer.querySelector('.form-steps__back');

  let currentStep = 1;
  const totalSteps = steps.length;
  const formData = {};

  function showStep(stepNum) {
    steps.forEach(function (step) {
      step.classList.remove('form-step--active');
      if (parseInt(step.dataset.step) === stepNum) {
        step.classList.add('form-step--active');
      }
    });

    // Update dots
    dots.forEach(function (dot, i) {
      dot.classList.remove('form-steps__dot--active', 'form-steps__dot--completed');
      if (i + 1 === stepNum) {
        dot.classList.add('form-steps__dot--active');
      } else if (i + 1 < stepNum) {
        dot.classList.add('form-steps__dot--completed');
      }
    });

    // Show/hide back button
    if (backBtn) {
      backBtn.style.visibility = stepNum === 1 ? 'hidden' : 'visible';
    }

    // Change next button text on last step
    if (nextBtn) {
      nextBtn.textContent = stepNum === totalSteps ? 'Send enquiry' : 'Next';
    }

    currentStep = stepNum;

    // GA4 custom event — form step completion
    if (typeof gtag === 'function') {
      gtag('event', 'form_step_view', {
        step_number: stepNum,
        step_total: totalSteps
      });
    }
  }

  // Handle option selection (steps 1-3)
  formContainer.addEventListener('click', function (e) {
    const option = e.target.closest('.form-step__option');
    if (!option) return;

    const step = option.closest('.form-step');
    if (!step) return;

    const stepNum = parseInt(step.dataset.step);

    // Deselect all options in this step
    step.querySelectorAll('.form-step__option').forEach(function (opt) {
      opt.classList.remove('form-step__option--selected');
      opt.setAttribute('aria-checked', 'false');
    });

    // Select clicked option
    option.classList.add('form-step__option--selected');
    option.setAttribute('aria-checked', 'true');

    // Store value
    const stepNames = { 1: 'projectType', 2: 'timeline', 3: 'budget' };
    formData[stepNames[stepNum]] = option.dataset.value;

    // GA4 custom event
    if (typeof gtag === 'function') {
      gtag('event', 'form_step_complete', {
        step_number: stepNum,
        step_value: option.dataset.value
      });
    }

    // Auto-advance removed so the user must explicitly click the Next button
  });

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      if (currentStep === totalSteps) {
        // Submit form
        submitForm();
        return;
      }

      // Check if an option is selected for steps 1-3
      const currentStepEl = formContainer.querySelector('.form-step--active');
      const selectedOption = currentStepEl.querySelector('.form-step__option--selected');

      if (currentStep <= 3 && !selectedOption) {
        // Subtle visual hint — don't block, but indicate
        currentStepEl.querySelectorAll('.form-step__option').forEach(function (opt) {
          opt.style.borderColor = 'var(--accent)';
          setTimeout(function () {
            opt.style.borderColor = '';
          }, 1000);
        });
        return;
      }

      showStep(currentStep + 1);
    });
  }

  // Back button
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  }

  function submitForm() {
    const nameInput = formContainer.querySelector('input[placeholder="Your name"]');
    const emailInput = formContainer.querySelector('input[placeholder="Email address"]');
    const messageInput = formContainer.querySelector('textarea');

    // Basic validation
    if (nameInput && !nameInput.value.trim()) {
      nameInput.focus();
      nameInput.style.borderColor = 'var(--accent)';
      return;
    }

    if (emailInput && !emailInput.value.trim()) {
      emailInput.focus();
      emailInput.style.borderColor = 'var(--accent)';
      return;
    }

    if (emailInput && !emailInput.checkValidity()) {
      emailInput.focus();
      emailInput.style.borderColor = 'var(--accent)';
      return;
    }

    // Collect form data
    formData.name = nameInput ? nameInput.value.trim() : '';
    formData.email = emailInput ? emailInput.value.trim() : '';
    formData.message = messageInput ? messageInput.value.trim() : '';

    // GA4 custom event — conversion goal
    if (typeof gtag === 'function') {
      gtag('event', 'form_submission', {
        project_type: formData.projectType,
        timeline: formData.timeline,
        budget: formData.budget
      });
    }

    // This is a static demo; connect the collected data to a form endpoint
    // before launch rather than implying it was delivered.
    formContainer.innerHTML = '\
      <div style="text-align: center; padding: var(--space-xl);">\
        <h3 class="subheading" style="margin-bottom: var(--space-md);">Thank you.</h3>\
        <p style="color: var(--text-muted);">Your details are ready to send. Connect this form to Formspree, Netlify Forms, or your own endpoint before launch.</p>\
      </div>\
    ';
  }

  // Keyboard support for options
  formContainer.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const option = e.target.closest('.form-step__option');
      if (option) {
        e.preventDefault();
        option.click();
      }
    }
  });

})();
