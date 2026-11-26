/* Reconstructs the obfuscated address only when a visitor activates the email link. */
(() => {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a[data-email-link]');
    if (!link) return;

    event.preventDefault();

    const obfuscatedEmail = link.dataset.obfuscatedEmail;
    if (!obfuscatedEmail || !obfuscatedEmail.includes('[at]')) {
      console.error('Invalid obfuscated email address for email link.');
      return;
    }

    window.location.href = `mailto:${obfuscatedEmail.replaceAll('[at]', '@')}`;
  });
})();
