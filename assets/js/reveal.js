/* reveal.js - Scroll reveal animation (port of Reveal.jsx).
 * Every element with the .reveal-up class fades in and slides up the first
 * time it enters the viewport: the script adds .is-visible, and the
 * transition itself is defined in assets/css/main.css.
 * A stagger delay can be set per element with an inline style:
 *   <div class="reveal-up" style="transition-delay: 120ms">
 */
(() => {
  const items = document.querySelectorAll('.reveal-up');
  if (!items.length) return;

  // Old browsers without IntersectionObserver: show everything immediately
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate only once
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
})();