/* articles-filter.js - Category filter of /articles/.
 * Every card wrapper in #articles-grid carries data-category and
 * The script hides the cards that do not match the selection, updates the
 * filter counter and shows an empty message when nothing matches.
 * Visual states are CSS-only: the script just sets data-active on the
 * category buttons (styled by data-[active=true] classes in list.html).
 * The filter panel is hidden in the HTML and revealed here, so that without
 * JavaScript visitors simply see the full list.
 */
(() => {
  const root = document.getElementById('articles-filters');
  const grid = document.getElementById('articles-grid');
  if (!root || !grid) return;

  const cards = [...grid.querySelectorAll('[data-article]')];
  const toggle = document.getElementById('filters-toggle');
  const panel = document.getElementById('filters-panel');
  const empty = document.getElementById('articles-empty');
  const categoryButtons = [...root.querySelectorAll('[data-filter-category]')];

  const state = { category: 'all' };

  // Apply the current selection to the cards and the UI
  const apply = () => {
    let shown = 0;
    cards.forEach((card) => {
      const matches =
        state.category === 'all' || card.dataset.category === state.category;
      card.hidden = !matches;
      if (matches) shown += 1;
    });

    empty.hidden = shown !== 0;

    categoryButtons.forEach((button) => {
      button.dataset.active = String(button.dataset.filterCategory === state.category);
    });
  };

  // Open / close the filter panel
  toggle.addEventListener('click', () => {
    const open = panel.hidden; // currently closed -> will open
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      state.category = button.dataset.filterCategory;
      apply();
    });
  });

  root.hidden = false; // JavaScript is running: show the filters
  apply();
})();