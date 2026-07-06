document.addEventListener('DOMContentLoaded', function () {

  /* =====================
    ハンバーガーメニュー（PC・SP共通）
  ===================== */
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var overlay   = document.getElementById('nav-overlay');

  function openNav() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      if (hamburger.classList.contains('open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    document.querySelectorAll('.mnav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }


  /* =====================
    スムーススクロール（ヘッダー高さ考慮）
  ===================== */
  var header = document.getElementById('site-header');

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset - 12,
        behavior: 'smooth'
      });
    });
  });


  /* =====================
    FAQ 開閉
  ===================== */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      var answer = this.nextElementSibling;
      if (answer) answer.hidden = expanded;
    });
  });


  /* =====================
    料金プラン 開閉（アコーディオン、SPのみ見た目に反映）
  ===================== */
  var pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach(function (card) {
    var head = card.querySelector('.pricing-head');
    if (!head) return;
    head.addEventListener('click', function () {
      var isOpen = card.classList.contains('is-open');
      pricingCards.forEach(function (c) {
        c.classList.remove('is-open');
        var b = c.querySelector('.pricing-head');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        card.classList.add('is-open');
        head.setAttribute('aria-expanded', 'true');
      }
    });
  });


  /* =====================
    スクロールフェードイン（IntersectionObserver）
  ===================== */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-fade]').forEach(function (el) {
      observer.observe(el);
    });

    /* ヒーローは即表示 */
    document.querySelectorAll('.hero [data-fade]').forEach(function (el) {
      setTimeout(function () { el.classList.add('visible'); }, 80);
    });

  } else {
    document.querySelectorAll('[data-fade]').forEach(function (el) {
      el.classList.add('visible');
    });
  }

});
