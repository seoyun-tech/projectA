document.addEventListener('DOMContentLoaded', () => {
  CategoryDropdown.init();
  const thumbs = document.querySelectorAll('.detail-images__thumb');
  const mainImg = document.getElementById('detailMainImg');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('detail-images__thumb--active'));
      thumb.classList.add('detail-images__thumb--active');
      mainImg.src = thumb.dataset.img;
    });
  });

  document.querySelector('.detail-sizes')?.addEventListener('click', e => {
    const btn = e.target.closest('.detail-size:not(.detail-size--soldout)');
    if (!btn) return;
    document.querySelectorAll('.detail-size').forEach(b => b.classList.remove('detail-size--active'));
    btn.classList.add('detail-size--active');
  });

  document.querySelector('.detail-colors')?.addEventListener('click', e => {
    const swatch = e.target.closest('.detail-color');
    if (!swatch) return;
    document.querySelectorAll('.detail-color').forEach(c => c.classList.remove('detail-color--active'));
    swatch.classList.add('detail-color--active');
  });

  document.querySelector('.detail-tabs__nav')?.addEventListener('click', e => {
    const tab = e.target.closest('.detail-tabs__tab');
    if (!tab) return;
    document.querySelectorAll('.detail-tabs__tab').forEach(t => t.classList.remove('detail-tabs__tab--active'));
    document.querySelectorAll('.detail-tabs__panel').forEach(p => p.classList.remove('detail-tabs__panel--active'));
    tab.classList.add('detail-tabs__tab--active');
    document.getElementById('tab-' + tab.dataset.tab)?.classList.add('detail-tabs__panel--active');
  });

  const cartBtn = document.getElementById('detailCartBtn');
  cartBtn?.addEventListener('click', () => {
    cartBtn.textContent = '담겼어요 ✓';
    setTimeout(() => {
      cartBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i>&nbsp; 장바구니 담기';
    }, 1500);
  });

  const wishBtn = document.getElementById('detailWishBtn');
  wishBtn?.addEventListener('click', () => {
    const isActive = wishBtn.classList.toggle('detail-info__cta-wish--active');
    const icon = wishBtn.querySelector('i');
    const count = wishBtn.querySelector('span');
    icon.classList.toggle('fa-regular', !isActive);
    icon.classList.toggle('fa-solid', isActive);
    count.textContent = isActive ? '893' : '892';
  });
});
