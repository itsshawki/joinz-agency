/* ============================================
   JOINZ AGENCY — Contact Form Logic
   Validation, State Management, Submission
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('[type="submit"]');
  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');

  // --- Input Validation ---
  const validators = {
    name: (value) => value.trim().length >= 2,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    service: (value) => value !== '',
    message: (value) => value.trim().length >= 10
  };

  const errorMessages = {
    name: 'Please enter your full name',
    email: 'Please enter a valid email address',
    service: 'Please select a service',
    message: 'Message must be at least 10 characters'
  };

  // --- Real-time Validation ---
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      clearFieldError(input);
    });
  });

  function validateField(input) {
    const name = input.name;
    const value = input.value;
    const validator = validators[name];

    if (validator && !validator(value)) {
      showFieldError(input, errorMessages[name]);
      return false;
    }

    clearFieldError(input);
    return true;
  }

  function showFieldError(input, message) {
    clearFieldError(input);
    input.style.borderColor = 'var(--color-error)';
    input.style.boxShadow = '0 0 0 3px rgba(255, 113, 108, 0.15)';

    const errorEl = document.createElement('p');
    errorEl.className = 'field-error';
    errorEl.style.cssText = 'color: var(--color-error); font-size: 0.75rem; margin-top: 0.5rem;';
    errorEl.textContent = message;
    input.parentElement.appendChild(errorEl);
  }

  function clearFieldError(input) {
    input.style.borderColor = '';
    input.style.boxShadow = '';
    const existing = input.parentElement.querySelector('.field-error');
    if (existing) existing.remove();
  }

  // --- Form Submission ---
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    form.querySelectorAll('input, select, textarea').forEach(input => {
      if (input.name && validators[input.name]) {
        if (!validateField(input)) isValid = false;
      }
    });

    if (!isValid) return;

    // Set loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Transmitting...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate form submission (replace with actual endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Success
      form.reset();
      if (successMessage) {
        successMessage.style.display = 'block';
        setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
      }
    } catch (err) {
      if (errorMessage) {
        errorMessage.style.display = 'block';
        setTimeout(() => { errorMessage.style.display = 'none'; }, 5000);
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }
  });
});
