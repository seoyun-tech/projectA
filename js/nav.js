const ProfileDropdown = (() => {
  const init = () => {
    const btn = document.getElementById('profileBtn');
    const panel = document.getElementById('profilePanel');
    if (!btn || !panel) return;

    const isOpen = () => panel.classList.contains('profile-dropdown__panel--open');

    const open = () => {
      panel.classList.add('profile-dropdown__panel--open');
      btn.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      panel.classList.remove('profile-dropdown__panel--open');
      btn.setAttribute('aria-expanded', 'false');
    };

    btn.addEventListener('click', e => { e.stopPropagation(); isOpen() ? close() : open(); });
    document.addEventListener('click', e => {
      if (!e.target.closest('#profileDropdown')) close();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  };

  return { init };
})();

const CategoryDropdown = (() => {
  let activeGender = 'men';

  const renderGrid = (grid) => {
    if (typeof CATEGORY_ITEMS === 'undefined') return;
    const items = CATEGORY_ITEMS[activeGender] || [];
    grid.innerHTML = items
      .map(label => `<a href="#" class="cat-dropdown__item">${label}</a>`)
      .join('');
  };

  const init = () => {
    const triggerBtn = document.getElementById('catMenuBtn');
    const dropdown = document.getElementById('catDropdown');
    const backdrop = document.getElementById('catBackdrop');
    const grid = document.getElementById('catDropdownGrid');
    if (!triggerBtn || !dropdown || !grid) return;

    const isOpen = () => dropdown.classList.contains('cat-dropdown--open');

    const open = () => {
      renderGrid(grid);
      dropdown.classList.add('cat-dropdown--open');
      backdrop?.classList.add('cat-backdrop--visible');
      triggerBtn.setAttribute('aria-expanded', 'true');
    };

    const close = () => {
      dropdown.classList.remove('cat-dropdown--open');
      backdrop?.classList.remove('cat-backdrop--visible');
      triggerBtn.setAttribute('aria-expanded', 'false');
    };

    triggerBtn.addEventListener('click', () => isOpen() ? close() : open());
    backdrop?.addEventListener('click', close);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

    dropdown.querySelectorAll('.cat-dropdown__tab').forEach(tab => {
      tab.addEventListener('click', () => {
        dropdown.querySelectorAll('.cat-dropdown__tab').forEach(t => t.classList.remove('cat-dropdown__tab--active'));
        tab.classList.add('cat-dropdown__tab--active');
        activeGender = tab.dataset.gender;
        renderGrid(grid);
      });
    });
  };

  return { init };
})();
