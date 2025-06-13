/* parallax.js – super-simple parallax that ALWAYS runs */

document.addEventListener('DOMContentLoaded', () => {
  const hero  = document.querySelector('.hero');
  if (!hero) return;                     // quit if page has no hero

  const SPEED = 0.25;                    // 0.1 subtle  |  0.3 bold

  // move background each animation frame
  const onScroll = () => {
    const shift = -window.scrollY * SPEED;            // negative = move up
    hero.style.backgroundPosition = `center calc(50% + ${shift}px)`;
  };

  onScroll();                                          // initial position
  window.addEventListener('scroll', onScroll, { passive: true });
});
