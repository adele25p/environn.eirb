/* Accessible details dialogs for the static events calendar. */
(() => {
  document.querySelectorAll('[data-event-dialog]').forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.eventDialog);
    if (!dialog) return;
    trigger.addEventListener('click', () => dialog.showModal());
    dialog.querySelector('[data-dialog-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
