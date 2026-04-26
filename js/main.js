const UIController = {
  updateClusterPanels(activeKey) {
    document.querySelectorAll('[data-cluster-panel]').forEach(panel => {
      panel.classList.toggle('cluster-panel--hidden', panel.dataset.clusterPanel !== activeKey);
    });
  },

  renderScrollNav(gender) {
    const clusters = GENDER_CLUSTERS[gender] || GENDER_CLUSTERS.men;
    const navList = document.querySelector('.scroll-nav__list');
    if (!navList) return;

    navList.innerHTML = '';
    clusters.forEach((cluster, index) => {
      const item = document.createElement('li');
      item.className = `scroll-nav__item${index === 0 ? ' scroll-nav__item--active' : ''}`;
      item.textContent = cluster.label;
      item.dataset.clusterKey = cluster.key;
      if (index !== 0) item.dataset.tooltip = '추후 업데이트 예정';

      item.addEventListener('click', () => {
        navList.querySelectorAll('.scroll-nav__item').forEach(el => el.classList.remove('scroll-nav__item--active'));
        item.classList.add('scroll-nav__item--active');
        this.updateClusterPanels(item.dataset.clusterKey);
      });

      navList.appendChild(item);
    });

    this.updateClusterPanels(clusters[0].key);
  },

  syncGenderState(gender) {
    this.renderScrollNav(gender);

    const categoryTarget = gender === 'women' ? 'women' : 'men';
    document.querySelectorAll('.item-category__panel').forEach(panel => {
      panel.classList.toggle('item-category__panel--hidden', panel.dataset.catPanel !== categoryTarget);
    });

    renderPhotoblog(gender);
  },
};

const HeroSlider = (() => {
  let activeGender = 'men';
  let currentIndex = 0;
  let autoPlayTimer = null;

  const getGenderSlides = (gender) =>
    Array.from(document.querySelectorAll(`.hero__slide[data-gender="${gender}"]`));

  const updatePager = (count) => {
    const pager = document.querySelector('#heroPager');
    pager.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const dot = document.createElement('span');
      dot.className = `hero__dot${i === 0 ? ' hero__dot--active' : ''}`;
      dot.addEventListener('click', () => navigate(i));
      pager.appendChild(dot);
    }
  };

  const navigate = (index) => {
    const activeSlides = getGenderSlides(activeGender);
    if (!activeSlides.length) return;

    activeSlides[currentIndex].classList.remove('hero__slide--active');
    currentIndex = (index + activeSlides.length) % activeSlides.length;
    activeSlides[currentIndex].classList.add('hero__slide--active');

    document.querySelector('#heroPager')
      .querySelectorAll('.hero__dot')
      .forEach((dot, i) => dot.classList.toggle('hero__dot--active', i === currentIndex));
  };

  const setGender = (gender) => {
    clearInterval(autoPlayTimer);
    document.querySelectorAll('.hero__slide').forEach(s => s.classList.remove('hero__slide--active'));

    activeGender = gender;
    currentIndex = 0;

    const activeSlides = getGenderSlides(gender);
    if (activeSlides.length) activeSlides[0].classList.add('hero__slide--active');

    updatePager(activeSlides.length);
    document.querySelectorAll('.hero__gender-tab').forEach(t =>
      t.classList.toggle('hero__gender-tab--active', t.dataset.gender === gender)
    );

    const isMultiSlide = activeSlides.length > 1;
    document.querySelector('#heroPrev').classList.toggle('hero__arrow--hidden', !isMultiSlide);
    document.querySelector('#heroNext').classList.toggle('hero__arrow--hidden', !isMultiSlide);

    if (isMultiSlide) autoPlayTimer = setInterval(() => navigate(currentIndex + 1), 4000);
    UIController.syncGenderState(gender);
  };

  const init = () => {
    document.querySelectorAll('.hero__gender-tab').forEach(tab => {
      if (tab.dataset.gender !== 'men') return;
      tab.addEventListener('click', () => setGender(tab.dataset.gender));
    });
    document.querySelector('#heroPrev').addEventListener('click', () => navigate(currentIndex - 1));
    document.querySelector('#heroNext').addEventListener('click', () => navigate(currentIndex + 1));
    setGender('men');
  };

  return { init, setGender };
})();

const FlashSale = (() => {
  const formatTime = () => {
    const now = new Date();
    const diff = new Date().setHours(24, 0, 0, 0) - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const init = () => {
    const timerEl = document.querySelector('#flashTimer');
    if (!timerEl) return;
    const strip = document.querySelector('.flash-strip');
    const closeBtn = document.querySelector('.flash-strip__close');

    timerEl.textContent = formatTime();
    setInterval(() => { timerEl.textContent = formatTime(); }, 1000);
    closeBtn.addEventListener('click', () => strip.classList.add('flash-strip--dismissed'));
  };

  return { init };
})();

const Interactions = {
  init() {
    this.initDrawer();
    this.initOnboarding();
    this.initWishToggle();
    this.initProductImageLinks();
    this.initBrandStoryLinks();
    this.initCartButtons();
    this.initSnapActions();
    this.initSearch();
    this.initScrollTop();
    this.initClusterTooltip();
    this.initNoopLinks();
  },

  initDrawer() {
    const hamburger = document.querySelector('#navHamburger');
    const drawer = document.querySelector('#navDrawer');
    const closeTargets = [
      document.querySelector('#navDrawerClose'),
      document.querySelector('#navDrawerOverlay'),
    ];

    const toggle = (isOpen) => {
      drawer.classList.toggle('nav-drawer--open', isOpen);
      hamburger.classList.toggle('nav__hamburger--open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', () => toggle(true));
    closeTargets.forEach(el => el?.addEventListener('click', () => toggle(false)));
    window.addEventListener('resize', () => { if (window.innerWidth > 768) toggle(false); });
  },

  initOnboarding() {
    const modal = document.querySelector('#onboardingModal');
    const banner = document.querySelector('#onboardingBanner');
    const closeBtn = document.querySelector('#onboardingClose');

    const toggleModal = (isOpen) => {
      modal.classList.toggle('onboarding-modal--open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (!isOpen) sessionStorage.setItem('onboarding_done', '1');
    };

    if (!sessionStorage.getItem('onboarding_done')) setTimeout(() => toggleModal(true), 700);

    ['#onboardingModalClose', '#onboardingModalSkip', '#onboardingModalBackdrop'].forEach(selector => {
      document.querySelector(selector)?.addEventListener('click', () => toggleModal(false));
    });

    document.querySelectorAll('.onboarding-modal__cluster').forEach(btn => {
      btn.addEventListener('click', () => {
        const { cluster, gender } = btn.dataset;
        if (gender) HeroSlider.setGender(gender);
        document.querySelectorAll('.scroll-nav__item').forEach(navItem => {
          if (navItem.textContent.trim() === cluster) navItem.click();
        });
        toggleModal(false);
      });
    });

    closeBtn?.addEventListener('click', () => banner.classList.add('onboarding-banner--dismissed'));
    document.querySelector('.onboarding-banner span')?.addEventListener('click', () => toggleModal(true));
  },

  initWishToggle() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.product-card__wish');
      if (!btn) return;
      e.preventDefault();
      const isActive = btn.classList.toggle('product-card__wish--active');
      const icon = btn.querySelector('i');
      icon.classList.toggle('fa-regular', !isActive);
      icon.classList.toggle('fa-solid', isActive);
    });
  },

  initSearch() {
    const overlay = document.querySelector('#searchOverlay');
    const input = document.querySelector('#searchInput');
    const openBtn = document.querySelector('.nav__search-btn');
    const closeTargets = [
      document.querySelector('#searchClose'),
      document.querySelector('#searchBackdrop'),
    ];

    const toggle = (isOpen) => {
      overlay.classList.toggle('search-overlay--open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (isOpen) setTimeout(() => input.focus(), 50);
      else input.value = '';
    };

    openBtn?.addEventListener('click', () => toggle(true));
    closeTargets.forEach(btn => btn?.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  },

  initScrollTop() {
    const btn = document.querySelector('#scrollTop');
    window.addEventListener('scroll', () =>
      btn.classList.toggle('scroll-top--visible', window.scrollY > 400)
    );
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  },

  initProductImageLinks() {
    document.addEventListener('click', e => {
      const wrap = e.target.closest('.product-card__img-wrap--link');
      if (!wrap || e.target.closest('button')) return;
      window.location.href = wrap.dataset.url;
    });
  },

  initBrandStoryLinks() {
    document.addEventListener('click', e => {
      const card = e.target.closest('.brand-story-card--link');
      if (!card) return;
      window.location.href = card.dataset.url;
    });
  },

  initCartButtons() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.product-card__cart');
      if (!btn) return;
      btn.textContent = '담겼어요 ✓';
      btn.style.background = 'rgba(0,0,0,0.88)';
      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> 빠른 담기';
        btn.style.background = '';
      }, 1500);
    });
  },

  initSnapActions() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('.lookbook-snap-card__action-btn');
      if (!btn) return;
      const icon = btn.querySelector('i');
      const isHeart = icon.classList.contains('fa-heart');
      const isActive = btn.classList.toggle('lookbook-snap-card__action-btn--active');
      icon.classList.toggle('fa-regular', !isActive);
      icon.classList.toggle('fa-solid', isActive);
      if (isHeart) icon.style.color = isActive ? '#ff4757' : '';
    });
  },

  initClusterTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'nav-tooltip';
    document.body.appendChild(tooltip);

    document.addEventListener('mouseover', e => {
      const item = e.target.closest('.scroll-nav__item[data-tooltip]');
      if (!item) return;
      const rect = item.getBoundingClientRect();
      tooltip.textContent = item.dataset.tooltip;
      tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
      tooltip.style.top = `${rect.bottom + 6}px`;
      tooltip.classList.add('nav-tooltip--visible');
    });

    document.addEventListener('mouseout', e => {
      if (!e.target.closest('.scroll-nav__item[data-tooltip]')) return;
      tooltip.classList.remove('nav-tooltip--visible');
    });
  },

  initNoopLinks() {
    document.addEventListener('click', e => {
      const link = e.target.closest('.section-block__more, .product-card__detail, .category-grid__item, .trending-keywords__tag');
      if (link) e.preventDefault();
    });
  },
};

const IntroModal = {
  init() {
    const modal = document.getElementById('introModal');
    const enterBtn = document.getElementById('introModalEnter');
    const backdrop = document.getElementById('introModalBackdrop');
    if (!modal) return;

    const dismiss = () => {
      modal.classList.add('intro-modal--hidden');
      modal.addEventListener('transitionend', () => modal.remove(), { once: true });
      document.body.style.overflow = '';
    };

    document.body.style.overflow = 'hidden';
    enterBtn.addEventListener('click', dismiss);
    backdrop.addEventListener('click', dismiss);
  },
};

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  HeroSlider.init();
  FlashSale.init();
  Interactions.init();
  CategoryDropdown.init();
  ProfileDropdown.init();
  IntroModal.init();
});
