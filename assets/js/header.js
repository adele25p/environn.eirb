/* header.js - Behavior of the header (port of Header.jsx).
 * - Sets data-scrolled on the header once the page is scrolled past 30px;
 *   the visual change itself is done in CSS (see header.html).
 * - Opens and closes the mobile menu and keeps aria-expanded in sync.
 * Wrapped in an IIFE so variables stay private once bundled with other files.
 */
(() => {
  const header = document.getElementById('site-header');
  if (!header) return;

  // --- Scroll state ---
  const onScroll = () => {
    header.dataset.scrolled = String(window.scrollY > 30);
  };
  onScroll(); // handle pages loaded already scrolled (reload, anchor link)
  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile menu ---
  const button = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;

  const iconOpen = button.querySelector('[data-icon="open"]');
  const iconClose = button.querySelector('[data-icon="close"]');

  const setOpen = (open) => {
    menu.hidden = !open;
    iconOpen.hidden = open;
    iconClose.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  };

  button.addEventListener('click', () => setOpen(menu.hidden));

  // Close the menu after tapping a link
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
})();