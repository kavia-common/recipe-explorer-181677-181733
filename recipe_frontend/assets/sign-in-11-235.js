(function(){
  // Basic keyboard support for "buttons"
  function handleKeyActivate(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  }

  const googleBtn = document.querySelector('.social-btn.google');
  const facebookBtn = document.querySelector('.social-btn.facebook');
  const ctaBtn = document.querySelector('.cta-button');

  [googleBtn, facebookBtn, ctaBtn].forEach(el => {
    if (!el) return;
    el.addEventListener('keydown', handleKeyActivate);
    el.addEventListener('click', () => {
      // Placeholder click handlers; integrate with app as needed
      console.log('Clicked:', el.getAttribute('aria-label') || el.className);
    });
  });
})();
