// ── Primitive card builders ────────────────────────────────────────────────

const productCardHTML = (p) => `
  <div class="product-card">
    <div class="product-card__img-wrap${p.url ? ' product-card__img-wrap--link' : ''}"${p.url ? ` data-url="${p.url}"` : ''}>
      <img src="assets/${p.img}" alt="${p.brand}" loading="lazy" />
      <button type="button" class="product-card__wish" aria-label="찜하기">
        <i class="fa-regular fa-heart"></i>
      </button>
      <button type="button" class="product-card__cart" aria-label="장바구니 담기">
        <i class="fa-solid fa-bag-shopping"></i> 빠른 담기
      </button>
    </div>
    <div class="product-card__info">
      <p class="product-card__desc">${p.brand}</p>
      <p class="product-card__name">${p.name}</p>
      <p class="product-card__price">${p.price}</p>
      ${p.priceHint ? `<p class="product-card__price-hint">${p.priceHint}</p>` : ''}
      <p class="product-card__review">${p.review}</p>
    </div>
  </div>`;

const brandStoryCardHTML = (f) => `
  <div class="brand-story-card${f.url ? ' brand-story-card--link' : ''}"${f.url ? ` data-url="${f.url}"` : ''}>
    <div class="brand-story-card__img-wrap">
      <img src="assets/${f.img}" alt="" loading="lazy" />
    </div>
    <div class="brand-story-card__info">
      <p class="brand-story-card__title">${f.title}</p>
      <span class="brand-story-card__date">${f.date}</span>
    </div>
  </div>`;

const rankingCardHTML = (item, rank) => `
  <div class="ranking-card">
    <span class="ranking-card__num">${rank}</span>
    <div class="ranking-card__img-wrap">
      <img src="assets/${item.img}" alt="${item.brand}" loading="lazy" />
      <button type="button" class="product-card__wish" aria-label="찜하기"><i class="fa-regular fa-heart"></i></button>
      <button type="button" class="product-card__cart" aria-label="장바구니 담기"><i class="fa-solid fa-bag-shopping"></i> 빠른 담기</button>
    </div>
    <div class="ranking-card__info">
      <p class="ranking-card__brand">${item.brand}</p>
      <p class="ranking-card__price">${item.price}</p>
      ${item.priceHint ? `<p class="ranking-card__price-hint">${item.priceHint}</p>` : ''}
      ${item.review ? `<p class="product-card__review">${item.review}</p>` : ''}
    </div>
  </div>`;

const preorderCardHTML = (item) => `
  <div class="ranking-card">
    <div class="ranking-card__img-wrap">
      <img src="assets/${item.img}" alt="${item.brand}" loading="lazy" />
      <span class="ranking-card__badge">PRE ORDER</span>
      <button type="button" class="product-card__wish" aria-label="찜하기"><i class="fa-regular fa-heart"></i></button>
      <button type="button" class="product-card__cart" aria-label="장바구니 담기"><i class="fa-solid fa-bag-shopping"></i> 빠른 담기</button>
    </div>
    <div class="ranking-card__info">
      <p class="ranking-card__brand">${item.brand}</p>
      <p class="ranking-card__price">${item.price}</p>
      <p class="ranking-card__preorder-meta">
        <span class="ranking-card__deadline">D-${item.deadline}</span>
        <span class="ranking-card__ship">${item.ship} 배송 예정</span>
      </p>
    </div>
  </div>`;

const brandCardHTML = (b) => `
  <div class="brand-card">
    <div class="brand-card__logo">${b.logo}</div>
    <p class="brand-card__name">${b.name}</p>
  </div>`;

const snapCardHTML = (snap) => {
  const sizeClass = snap.size ? ` lookbook-snap-card--${snap.size}` : '';
  return `
    <div class="lookbook-snap-card${sizeClass}">
      <div class="lookbook-snap-card__img">
        <img src="assets/${snap.img}" alt="${snap.username}" loading="lazy" />
      </div>
      <div class="lookbook-snap-card__meta">
        <div class="lookbook-snap-card__info">
          <p class="lookbook-snap-card__name">${snap.username}</p>
          <p class="lookbook-snap-card__tag">${snap.tag}</p>
        </div>
      </div>
      <div class="lookbook-snap-card__actions">
        <button type="button" class="lookbook-snap-card__action-btn" aria-label="좋아요">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button type="button" class="lookbook-snap-card__action-btn" aria-label="저장">
          <i class="fa-regular fa-bookmark"></i>
        </button>
      </div>
    </div>`;
};

const photoblogEntryHTML = (entry, isReverse) => {
  const reverseClass = isReverse ? ' photoblog-long-entry--reverse' : '';
  return `
    <article class="photoblog-long-entry${reverseClass}">
      <div class="photoblog-long-entry__img">
        <img src="assets/${entry.img}" alt="" loading="lazy" />
      </div>
      <div class="photoblog-long-entry__body">
        <div class="photoblog-long-entry__head">
          <span class="photoblog-long-entry__tag">${entry.tag}</span>
          <span class="photoblog-long-entry__readtime">${entry.readtime}</span>
        </div>
        <h3 class="photoblog-long-entry__title">${entry.title}</h3>
        <p class="photoblog-long-entry__text">${entry.text}</p>
        <div class="photoblog-long-entry__meta">
          <div class="photoblog-long-entry__avatar">${entry.avatar}</div>
          <div>
            <p class="photoblog-long-entry__name">${entry.author}</p>
            <p class="photoblog-long-entry__date">${entry.date}</p>
          </div>
        </div>
      </div>
    </article>`;
};


// ── Cluster panel builder ──────────────────────────────────────────────────

const renderClusterPanels = (container, clusterData, gridClass, cardBuilder) => {
  container.innerHTML = Object.entries(clusterData)
    .map(([key, items], panelIdx) => {
      const hiddenClass = panelIdx > 0 ? ' cluster-panel--hidden' : '';
      return `
        <div class="${gridClass}${hiddenClass}" data-cluster-panel="${key}">
          ${items.map((item, idx) => cardBuilder(item, idx)).join('')}
        </div>`;
    })
    .join('');
};


// ── Section renderers ──────────────────────────────────────────────────────

const renderHeroSlides = () => {
  const slider = document.querySelector('.hero__slider');
  if (!slider) return;

  slider.innerHTML = HERO_SLIDES.map((slide, i) => {
    const isActive = i === 0 ? ' hero__slide--active' : '';
    const title = slide.title.replace(/\n/g, '<br>');
    return `
      <div class="hero__slide${isActive}" data-gender="${slide.gender}" data-slide-idx="${i}">
        <img src="assets/${slide.img}" alt="${slide.label}" />
        <div class="hero__overlay">
          <p class="hero__label">${slide.label}</p>
          <h2 class="hero__title">${title}</h2>
          <p class="hero__sub">${slide.sub}</p>
          <button type="button" class="hero__btn">${slide.btn}</button>
        </div>
      </div>`;
  }).join('');
};

const renderProductSections = () => {
  document.querySelectorAll('[data-render="products"]').forEach(container => {
    renderClusterPanels(container, CLUSTER_PRODUCTS, 'product-grid', productCardHTML);
  });
  document.querySelectorAll('[data-render="latest-products"]').forEach(container => {
    renderClusterPanels(container, CLUSTER_LATEST_PRODUCTS, 'product-grid', productCardHTML);
  });
};

const renderBrandStories = () => {
  const container = document.querySelector('#brand-stories-content');
  if (!container) return;
  renderClusterPanels(container, CLUSTER_BRAND_STORIES, 'brand-story-grid', brandStoryCardHTML);
};

const renderStreetSnaps = () => {
  const container = document.querySelector('#snaps-content');
  if (!container) return;
  container.innerHTML = STREET_SNAPS.map(snapCardHTML).join('');
};

const renderRankings = () => {
  const container = document.querySelector('#rankings-content');
  if (!container) return;
  renderClusterPanels(container, CLUSTER_RANKINGS, 'ranking-grid',
    (item, idx) => rankingCardHTML(item, idx + 1));
};

const renderPreorders = () => {
  const container = document.querySelector('#preorders-content');
  if (!container) return;
  renderClusterPanels(container, CLUSTER_PREORDERS, 'ranking-grid', preorderCardHTML);
};

const renderBrands = () => {
  const container = document.querySelector('#brands-content');
  if (!container) return;
  renderClusterPanels(container, CLUSTER_BRANDS, 'brand-grid', brandCardHTML);
};

const renderCategories = () => {
  const container = document.querySelector('#categories-content');
  if (!container) return;

  container.innerHTML = Object.entries(CATEGORY_ITEMS)
    .map(([gender, items], i) => {
      const hiddenClass = i > 0 ? ' item-category__panel--hidden' : '';
      return `
        <div class="category-grid item-category__panel${hiddenClass}" data-cat-panel="${gender}">
          ${items.map(label => `<a href="#" class="category-grid__item">${label}</a>`).join('')}
        </div>`;
    })
    .join('');
};

const renderTrendingKeywords = () => {
  const section = document.querySelector('.trending-keywords');
  if (!section) return;

  const listContainer = section.querySelector('.trending-keywords__lists');
  if (!listContainer) return;

  listContainer.innerHTML = Object.entries(TRENDING_KEYWORDS)
    .map(([key, tags], i) => {
      const hiddenClass = i > 0 ? ' cluster-panel--hidden' : '';
      return `
        <div class="trending-keywords__list${hiddenClass}" data-cluster-panel="${key}">
          ${tags.map(tag => `<a href="#" class="trending-keywords__tag">${tag}</a>`).join('')}
        </div>`;
    })
    .join('');
};

const renderPhotoblog = (gender = 'men') => {
  const container = document.querySelector('#photoblog-content');
  if (!container) return;
  const entries = PHOTOBLOG_ENTRIES[gender] || PHOTOBLOG_ENTRIES.men;
  container.innerHTML = entries
    .map((entry, i) => photoblogEntryHTML(entry, i % 2 === 1))
    .join('');
};


// ── Init ──────────────────────────────────────────────────────────────────

const renderAll = () => {
  renderHeroSlides();
  renderProductSections();
  renderBrandStories();
  renderStreetSnaps();
  renderRankings();
  renderPreorders();
  renderBrands();
  renderCategories();
  renderTrendingKeywords();
  renderPhotoblog();
};
