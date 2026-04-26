document.addEventListener('DOMContentLoaded', () => {
  CategoryDropdown.init();

  document.addEventListener('click', e => {
    const imgWrap = e.target.closest('.product-card__img-wrap--link');
    if (imgWrap && !e.target.closest('button')) {
      window.location.href = imgWrap.dataset.url;
      return;
    }

    const wishBtn = e.target.closest('.product-card__wish');
    if (wishBtn) {
      e.preventDefault();
      const isActive = wishBtn.classList.toggle('product-card__wish--active');
      const icon = wishBtn.querySelector('i');
      icon.classList.toggle('fa-regular', !isActive);
      icon.classList.toggle('fa-solid', isActive);
      return;
    }

    const cartBtn = e.target.closest('.product-card__cart');
    if (cartBtn) {
      cartBtn.textContent = '담겼어요 ✓';
      cartBtn.style.background = 'rgba(0,0,0,0.88)';
      setTimeout(() => {
        cartBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> 빠른 담기';
        cartBtn.style.background = '';
      }, 1500);
    }
  });
});
