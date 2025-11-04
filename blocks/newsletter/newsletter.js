// blocks/newsletter/newsletter.js

export default function decorate(block) {
  // Create HTML markup for the newsletter section
  block.innerHTML = `
    <div class="footer-newsletter">
      <form id="footerNewsletterForm" class="footer-newsletter__form" action="https://your-endpoint.example.com/subscribe" method="post" novalidate>
        <input
          type="email"
          id="footerNewsletterEmail"
          name="email"
          placeholder="Enter your email"
          required
          class="footer-newsletter__input"
        />
        <button type="submit" class="footer-newsletter__button">Subscribe</button>
        <div id="footerNewsletterError" class="footer-newsletter__error" aria-live="polite"></div>
      </form>
    </div>
  `;

  const form = block.querySelector('#footerNewsletterForm');
  const emailInput = block.querySelector('#footerNewsletterEmail');
  const errorDiv = block.querySelector('#footerNewsletterError');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorDiv.style.display = 'none';
    errorDiv.style.color = ''; // reset to default color
    errorDiv.textContent = '';

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      errorDiv.textContent = 'Please enter your email address.';
      errorDiv.style.display = 'block';
      emailInput.focus();
      return;
    }

    if (!emailPattern.test(emailValue)) {
      errorDiv.textContent = 'Please enter a valid email address.';
      errorDiv.style.display = 'block';
      emailInput.focus();
      return;
    }

    // If valid, you can either submit normally:
    form.submit();
  });
}
