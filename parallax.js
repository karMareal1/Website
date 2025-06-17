/* parallax.js – move hero background relative to scroll (real parallax) */
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return; // quit on pages without hero

  const SPEED = 0.8; // 0.2 subtle | 0.5 medium | 0.8 strong

  // Ensure hero has a background image
  if (!hero.style.backgroundImage) {
    hero.style.backgroundImage = 'url("images/kareem.JPG")';
    hero.style.backgroundSize = 'cover';
    hero.style.backgroundPosition = 'center';
    hero.style.backgroundAttachment = 'fixed';
  }

  function updateParallax() {
    const rect = hero.getBoundingClientRect();
    const offset = rect.top;
    hero.style.backgroundPosition = `center ${offset * SPEED}px`;
  }

  // Initialize parallax
  updateParallax();
  
  // Add scroll event listener
  window.addEventListener('scroll', updateParallax, { passive: true });
  
  // Also update on resize
  window.addEventListener('resize', updateParallax);
})();

