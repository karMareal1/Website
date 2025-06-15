/* parallax.js – move hero background relative to scroll (real parallax) */
document.addEventListener('DOMContentLoaded', () => {
  const hero  = document.querySelector('.hero');
  if (!hero) return;                         // quit on pages without hero

  const SPEED = 0.8;                         // 0.2 subtle | 0.5 medium | 0.8 strong

  function updateParallax() {
    /* how far the hero’s *top edge* is from the viewport top */
    const rect   = hero.getBoundingClientRect();
    /* Positive when hero is below top, negative after scrolling past it */
    const offset = rect.top;

    /* shift background upward: smaller SPEED = slower motion */
    hero.style.backgroundPosition = `center ${offset * SPEED}px`;
  }

  /* run once now, then on every scroll */
  updateParallax();
  window.addEventListener('scroll', updateParallax, { passive: true });
});
