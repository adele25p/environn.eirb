/* contact-form.js - Background submission of the contact form (port of ContactSection.jsx).
 * Sends the fields as JSON to the URL in the form's action attribute (Web3Forms
 * or Formspree, set in hugo.toml) and reflects the progress in form.dataset.status:
 *   idle -> sending -> sent (back to idle after 5 s) or error.
 * All visual changes (button label, messages) are CSS-only and read data-status
 * (see layouts/_partials/sections/contact.html).
 * Without JavaScript the form is submitted the classic way by the browser.
 */
(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  let resetTimer;

  const setStatus = (status) => {
    form.dataset.status = status;
    button.disabled = status === 'sending';
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearTimeout(resetTimer);

    const action = form.getAttribute('action');
    if (!action) {
      setStatus('error'); // form not configured in hugo.toml
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // Checked honeypot (bots) is included in FormData and rejected by the service
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) throw new Error('Send failed');

      form.reset();
      setStatus('sent');
      resetTimer = setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  });
})();