/* ============================================================
   KHALÉ — Core Application Logic
   Cart · Wishlist · Search · UI · Toast · Animations
   ============================================================ */

/* ================================================================
   LOGO HTML
================================================================ */
const LOGO_HTML = `
<a href="index.html" class="site-logo">
  <span class="logo-name">KHALÉ</span>
</a>`;

const LOGO_LIGHT_HTML = `
<a href="index.html" class="site-logo logo-light">
  <span class="logo-name">KHALÉ</span>
</a>`;

/* ================================================================
   CART MANAGEMENT
================================================================ */
const Cart = {
  get() {
    try { return JSON.parse(localStorage.getItem('khale_cart')) || []; }
    catch { return []; }
  },
  save(items) {
    localStorage.setItem('khale_cart', JSON.stringify(items));
    Cart.updateBadges();
    Cart.broadcastUpdate();
  },
  add(productId, qty = 1) {
    const items = Cart.get();
    const product = getProduct(productId);
    if (!product) return;
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, 10);
    } else {
      items.push({ id: product.id, qty });
    }
    Cart.save(items);
    Toast.show(`تمت إضافة "${product.name}" إلى السلة`, 'success');
  },
  remove(productId) {
    const items = Cart.get().filter(i => i.id !== parseInt(productId));
    Cart.save(items);
    Toast.show('تم حذف المنتج من السلة', 'info');
  },
  updateQty(productId, qty) {
    const items = Cart.get();
    const item = items.find(i => i.id === parseInt(productId));
    if (item) {
      if (qty < 1) { Cart.remove(productId); return; }
      item.qty = Math.min(qty, 10);
      Cart.save(items);
    }
  },
  clear() { Cart.save([]); },
  count() { return Cart.get().reduce((sum, i) => sum + i.qty, 0); },
  total() {
    return Cart.get().reduce((sum, i) => {
      const p = getProduct(i.id);
      return p ? sum + p.price * i.qty : sum;
    }, 0);
  },
  updateBadges() {
    const count = Cart.count();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },
  broadcastUpdate() { window.dispatchEvent(new CustomEvent('cartUpdated')); }
};

/* ================================================================
   WISHLIST MANAGEMENT
================================================================ */
const Wishlist = {
  get() {
    try { return JSON.parse(localStorage.getItem('khale_wishlist')) || []; }
    catch { return []; }
  },
  toggle(productId) {
    const id = parseInt(productId);
    const list = Wishlist.get();
    const idx = list.indexOf(id);
    const product = getProduct(id);
    if (idx > -1) {
      list.splice(idx, 1);
      Toast.show(`تم حذف "${product ? product.name : ''}" من المفضلة`, 'info');
    } else {
      list.push(id);
      Toast.show(`تمت إضافة "${product ? product.name : ''}" إلى المفضلة`, 'success');
    }
    localStorage.setItem('khale_wishlist', JSON.stringify(list));
    return idx === -1;
  },
  has(productId) { return Wishlist.get().includes(parseInt(productId)); }
};

/* ================================================================
   TOAST NOTIFICATIONS
================================================================ */
const Toast = {
  container: null,
  init() {
    if (!Toast.container) {
      Toast.container = document.createElement('div');
      Toast.container.className = 'toast-wrap';
      document.body.appendChild(Toast.container);
    }
  },
  show(message, type = 'info', duration = 3200) {
    Toast.init();
    const iconMap = {
      success: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
      error:   '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
      info:    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
    };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${iconMap[type] || iconMap.info}<span>${message}</span>`;
    Toast.container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-16px)';
      toast.style.transition = 'all .3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

/* ================================================================
   SEARCH
================================================================ */
const Search = {
  overlay: null,
  input: null,
  results: null,
  init() {
    Search.overlay = document.getElementById('searchOverlay');
    if (!Search.overlay) return;
    Search.input   = Search.overlay.querySelector('#srchInput');
    Search.results = Search.overlay.querySelector('#srchResults');
    Search.input && Search.input.addEventListener('input', Search.handleInput);
    Search.overlay.addEventListener('click', e => {
      if (e.target === Search.overlay) Search.close();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') Search.close();
    });
  },
  open() {
    if (!Search.overlay) return;
    Search.overlay.classList.add('open');
    setTimeout(() => Search.input && Search.input.focus(), 80);
  },
  close() {
    if (!Search.overlay) return;
    Search.overlay.classList.remove('open');
    if (Search.input)   Search.input.value = '';
    if (Search.results) Search.results.innerHTML = '';
  },
  handleInput(e) {
    const q = e.target.value.trim();
    if (!Search.results) return;
    if (!q) { Search.results.innerHTML = ''; return; }
    const matches = PRODUCTS.filter(p =>
      p.name.includes(q) || p.shortDesc.includes(q) || p.category.includes(q)
    );
    Search.renderResults(matches, q);
  },
  renderResults(products, q) {
    if (!Search.results) return;
    if (!products.length) {
      Search.results.innerHTML = `<p style="text-align:center;color:var(--text-3);padding:1.5rem;font-size:.875rem">لا توجد نتائج لـ "${q}"</p>`;
      return;
    }
    let html = `<p class="srch-results-label">النتائج (${products.length})</p>`;
    products.forEach(p => {
      html += `
        <a href="product-details.html?id=${p.id}" class="srch-result" onclick="Search.close()">
          <div class="srch-result-img">${ICONS[p.icon] || ''}</div>
          <div>
            <div class="srch-result-name">${p.name}</div>
            <div class="srch-result-price">${formatPrice(p.price)}</div>
          </div>
        </a>`;
    });
    Search.results.innerHTML = html;
  }
};

/* ================================================================
   PRODUCT CARD RENDERER
================================================================ */
function renderProductCard(product) {
  const wishlisted = Wishlist.has(product.id);
  const badgeMap = { best: 'badge-best', new: 'badge-new', sale: 'badge-sale' };
  const badge = product.badge
    ? `<span class="prod-badge ${badgeMap[product.badgeType] || 'badge-best'}">${product.badge}</span>` : '';
  const origPrice = product.originalPrice
    ? `<span class="prod-orig">${formatPrice(product.originalPrice)}</span>` : '';

  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-card-img">
        ${badge}
        <button class="prod-wish${wishlisted ? ' on' : ''}" onclick="toggleWishlist(event,${product.id})" aria-label="أضف للمفضلة">
          <svg xmlns="http://www.w3.org/2000/svg" fill="${wishlisted ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <div class="prod-icon-wrap">${ICONS[product.icon] || ''}</div>
        <div class="prod-hover-cta" onclick="window.location='product-details.html?id=${product.id}'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          عرض سريع
        </div>
      </div>
      <div class="product-card-body">
        <h3 class="prod-name"><a href="product-details.html?id=${product.id}">${product.name}</a></h3>
        <p class="prod-short">${product.shortDesc}</p>
        <div class="prod-price-row">
          <div>
            <span class="prod-price">${formatPrice(product.price)}</span>
            ${origPrice}
          </div>
          <button class="prod-cart-btn" onclick="addToCart(${product.id})" aria-label="أضف للسلة">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          </button>
        </div>
      </div>
    </article>`;
}

/* ================================================================
   GLOBAL BUTTON HANDLERS
================================================================ */
function addToCart(productId) {
  Cart.add(productId);
  const btn = document.querySelector('.icon-btn[href="cart.html"], a[href="cart.html"].icon-btn');
  if (btn) { btn.style.transform = 'scale(1.25)'; setTimeout(() => btn.style.transform = '', 300); }
}

function toggleWishlist(event, productId) {
  event.stopPropagation();
  const btn = event.currentTarget;
  const wishlisted = Wishlist.toggle(productId);
  btn.classList.toggle('on', wishlisted);
  const svgPath = btn.querySelector('path');
  if (svgPath) svgPath.setAttribute('fill', wishlisted ? 'currentColor' : 'none');
}

/* ================================================================
   SCROLL REVEAL (IntersectionObserver)
================================================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));
}

/* ================================================================
   COUNTER ANIMATION
================================================================ */
function animateCounter(el, target, suffix = '') {
  const duration = 1800;
  const step = 16;
  const steps = duration / step;
  let current = 0;
  const inc = target / steps;
  const timer = setInterval(() => {
    current += inc;
    if (current >= target) {
      el.textContent = target.toLocaleString('ar-IQ') + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current).toLocaleString('ar-IQ') + suffix;
    }
  }, step);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

/* ================================================================
   HEADER & NAVIGATION
================================================================ */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
  }

  const menuBtn   = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn  = document.getElementById('mobileNavClose');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => mobileNav.classList.add('open'));
    closeBtn && closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
    mobileNav.addEventListener('click', e => {
      if (e.target === mobileNav) mobileNav.classList.remove('open');
    });
  }

  document.querySelectorAll('.search-open-btn').forEach(btn => {
    btn.addEventListener('click', Search.open);
  });

  /* header inline search → redirect */
  const hdrInput = document.querySelector('.hdr-search-wrap input');
  if (hdrInput) {
    hdrInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && hdrInput.value.trim()) {
        window.location.href = `products.html?q=${encodeURIComponent(hdrInput.value.trim())}`;
      }
    });
  }
}

/* ================================================================
   DISCOUNT BANNER
================================================================ */
function initBanner() {
  const banner  = document.getElementById('discountBanner');
  const closeBtn = document.getElementById('bannerClose');
  if (!banner) return;
  if (sessionStorage.getItem('bannerDismissed')) {
    banner.style.display = 'none';
    return;
  }
  closeBtn && closeBtn.addEventListener('click', () => {
    banner.style.opacity = '0';
    banner.style.transition = 'opacity .3s';
    setTimeout(() => { banner.style.display = 'none'; }, 300);
    sessionStorage.setItem('bannerDismissed', '1');
  });
}

/* ================================================================
   SCROLL TO TOP
================================================================ */
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 450);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ================================================================
   FAQ ACCORDION
================================================================ */
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    if (btn._faqInit) return;
    btn._faqInit = true;
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const ans  = item.querySelector('.faq-ans');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(oi => {
        oi.classList.remove('open');
        const a = oi.querySelector('.faq-ans');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });
}

/* ================================================================
   PRODUCT TABS
================================================================ */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.getElementById(tabId);
      if (pane) pane.classList.add('active');
    });
  });
}

/* ================================================================
   PAYMENT OPTIONS
================================================================ */
function initPaymentOptions() {
  document.querySelectorAll('.pay-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

/* ================================================================
   NEWSLETTER
================================================================ */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      Toast.show('شكراً! تم تسجيلك في القائمة البريدية', 'success');
      input.value = '';
    }
  });
}

/* ================================================================
   CONTACT FORM
================================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    Toast.show('تم إرسال رسالتك! سنتواصل معك قريباً', 'success');
    form.reset();
  });
}

/* ================================================================
   COUPON CODE
================================================================ */
const COUPONS = { KHALE10: 10, KHALE20: 20, BEAUTY15: 15 };

function initCoupon() {
  const form = document.getElementById('couponForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('.coupon-inp');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (COUPONS[code]) {
      sessionStorage.setItem('khale_coupon', JSON.stringify({ code, discount: COUPONS[code] }));
      Toast.show(`كوبون صالح! تم تطبيق خصم ${COUPONS[code]}%`, 'success');
      if (typeof updateCartDisplay === 'function') updateCartDisplay();
    } else {
      Toast.show('كوبون غير صالح أو منتهي الصلاحية', 'error');
    }
  });
}

/* ================================================================
   FILTER TABS (products page)
================================================================ */
function initFilterTabs() {
  const pills = document.querySelectorAll('.filter-pill');
  const grid  = document.getElementById('productsGrid');
  if (!pills.length || !grid) return;
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.dataset.category;
      const filtered = filterProducts(cat);
      grid.innerHTML = filtered.map(renderProductCard).join('');
      const countEl = document.querySelector('.prod-count');
      if (countEl) countEl.textContent = `${filtered.length} منتج`;
    });
  });
}

/* ================================================================
   LANGUAGE SWITCHER
================================================================ */
const Lang = {
  current: 'ar',
  init() {
    Lang.current = localStorage.getItem('khale_lang') || 'ar';
    Lang.apply();
    document.querySelectorAll('.ls-btn').forEach(btn => {
      btn.addEventListener('click', () => Lang.set(btn.dataset.lang));
    });
  },
  set(lang) {
    Lang.current = lang;
    localStorage.setItem('khale_lang', lang);
    Lang.apply();
  },
  apply() {
    document.documentElement.lang = Lang.current;
    document.querySelectorAll('.ls-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === Lang.current);
    });
  }
};

/* ================================================================
   INIT ALL
================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadges();
  Lang.init();
  initHeader();
  initBanner();
  initScrollTop();
  initFAQ();
  initTabs();
  initPaymentOptions();
  initNewsletter();
  initContactForm();
  initCoupon();
  initFilterTabs();
  Search.init();
  initScrollReveal();
  initCounters();
});

/* ================================================================
   SHARED HTML — HEADER
================================================================ */
function renderHeader(activePage) {
  return `
  <div class="discount-banner" id="discountBanner">
    <span class="t-ar">اشتري الطقم الكامل واحصلي على <strong>خصم 16%</strong> — استخدمي كود <strong>KHALE20</strong></span>
    <span class="t-en">Buy the full set and get <strong>16% off</strong> — use code <strong>KHALE20</strong></span>
    <button class="banner-close" id="bannerClose" aria-label="إغلاق">×</button>
  </div>

  <header class="site-header" id="siteHeader">
    <div class="header-inner">

      <nav class="header-nav-left">
        <a href="index.html"    class="nav-link${activePage==='home'?     ' active':''}"><span class="t-ar">الرئيسية</span><span class="t-en">Home</span></a>
        <a href="products.html" class="nav-link${activePage==='products'? ' active':''}"><span class="t-ar">المنتجات</span><span class="t-en">Products</span></a>
        <a href="about.html"    class="nav-link${activePage==='about'?    ' active':''}"><span class="t-ar">من نحن</span><span class="t-en">About</span></a>
      </nav>

      <div class="header-logo">${LOGO_HTML}</div>

      <div class="header-nav-right">
        <div class="hdr-search-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
          <input type="text" placeholder="ابحثي... / Search..." autocomplete="off">
        </div>
        <div class="header-actions">
          <div class="lang-switcher">
            <button class="ls-btn" data-lang="ar">AR</button>
            <button class="ls-btn" data-lang="en">EN</button>
          </div>
          <button class="icon-btn search-open-btn" aria-label="بحث">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
          </button>
          <a href="cart.html" class="icon-btn" aria-label="السلة" style="position:relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg>
            <span class="cart-count" style="display:none">0</span>
          </a>
          <a href="contact.html" class="nav-link${activePage==='contact'?' active':''}"><span class="t-ar">تواصل</span><span class="t-en">Contact</span></a>
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="القائمة">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-panel">
      <button class="mob-close" id="mobileNavClose">×</button>
      <div class="lang-switcher" style="margin:1rem 1.5rem .5rem">
        <button class="ls-btn" data-lang="ar">AR</button>
        <button class="ls-btn" data-lang="en">EN</button>
      </div>
      <a href="index.html"    class="mob-link${activePage==='home'?     ' active':''}"><span class="t-ar">الرئيسية</span><span class="t-en">Home</span></a>
      <a href="products.html" class="mob-link${activePage==='products'? ' active':''}"><span class="t-ar">المنتجات</span><span class="t-en">Products</span></a>
      <a href="about.html"    class="mob-link${activePage==='about'?    ' active':''}"><span class="t-ar">من نحن</span><span class="t-en">About</span></a>
      <a href="contact.html"  class="mob-link${activePage==='contact'?  ' active':''}"><span class="t-ar">تواصل معنا</span><span class="t-en">Contact Us</span></a>
      <a href="faq.html"      class="mob-link${activePage==='faq'?      ' active':''}"><span class="t-ar">الأسئلة الشائعة</span><span class="t-en">FAQ</span></a>
      <a href="cart.html"     class="mob-link"><span class="t-ar">السلة</span><span class="t-en">Cart</span></a>
    </div>
  </div>

  <div class="search-overlay" id="searchOverlay">
    <div class="search-modal">
      <div class="srch-input-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
        <input type="text" id="srchInput" placeholder="ابحثي عن منتج..." autocomplete="off">
      </div>
      <div id="srchResults"></div>
    </div>
  </div>`;
}

/* ================================================================
   SHARED HTML — FOOTER
================================================================ */
function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">

        <div class="footer-brand-col">
          <div class="footer-logo-wrap">${LOGO_LIGHT_HTML}</div>
          <p class="footer-desc">أدوات تصفيف فاخرة مصممة للمرأة العربية. نقدم لكِ تجربة صالون احترافي في راحة منزلكِ.</p>
          <div class="footer-socials">
            <a href="#" class="social-btn" aria-label="إنستقرام">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="تيك توك">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.9a8.22 8.22 0 004.84 1.56V7.02a4.85 4.85 0 01-1.07-.33z"/></svg>
            </a>
            <a href="https://wa.me/9647501234567" class="social-btn" aria-label="واتساب">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.8a.5.5 0 00.606.63l6.17-1.617A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-4.998-1.366l-.358-.213-3.714.974.991-3.617-.234-.373A9.8 9.8 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818S21.818 6.582 21.818 12s-4.4 9.818-9.818 9.818z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="footer-col-head">روابط سريعة</h4>
          <ul class="footer-links">
            <li><a href="index.html"    class="footer-link">الرئيسية</a></li>
            <li><a href="products.html" class="footer-link">المنتجات</a></li>
            <li><a href="about.html"    class="footer-link">من نحن</a></li>
            <li><a href="cart.html"     class="footer-link">سلة التسوق</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-head">سياساتنا</h4>
          <ul class="footer-links">
            <li><a href="faq.html"      class="footer-link">الأسئلة الشائعة</a></li>
            <li><a href="shipping.html" class="footer-link">سياسة الشحن</a></li>
            <li><a href="returns.html"  class="footer-link">سياسة الإرجاع</a></li>
            <li><a href="contact.html"  class="footer-link">تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-col-head">تواصلي معنا</h4>
          <div class="footer-contact-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <span dir="ltr">+964 750 123 4567</span>
          </div>
          <div class="footer-contact-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span dir="ltr">info@khale.iq</span>
          </div>
          <div class="footer-contact-row">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            <span>بغداد، العراق</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 KHALÉ — جميع الحقوق محفوظة</p>
        <div class="payment-methods">
          <span class="pay-chip">COD</span>
          <span class="pay-chip">ZainCash</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- WhatsApp Float Button -->
  <a href="https://wa.me/9647501234567" class="wa-float" target="_blank" rel="noopener" aria-label="واتساب">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.8a.5.5 0 00.606.63l6.17-1.617A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.81 9.81 0 01-4.998-1.366l-.358-.213-3.714.974.991-3.617-.234-.373A9.8 9.8 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818S21.818 6.582 21.818 12s-4.4 9.818-9.818 9.818z"/></svg>
    <span class="wa-tooltip">تواصلي معنا</span>
  </a>

  <!-- Scroll To Top -->
  <button class="back-top" id="scrollTopBtn" aria-label="أعلى الصفحة">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>
  </button>`;
}
