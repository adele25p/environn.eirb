/* back-to-top.js - Shows a control for returning to the top after scrolling. */
(() => {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  const setVisible = (visible) => {
    button.classList.toggle('pointer-events-none', !visible);
    button.classList.toggle('translate-y-2', !visible);
    button.classList.toggle('opacity-0', !visible);
    button.setAttribute('aria-hidden', String(!visible));
    button.tabIndex = visible ? 0 : -1;
  };

  const onScroll = () => setVisible(window.scrollY > 300);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
