(function () {
  'use strict';

  // ============================================================
  // Reveal on scroll (replaces RevealEngine + interactions.ts)
  // ============================================================
  var REVEAL = {
    'f125550c-4eb5-5fa6-74d2-ee4a75889afb': { d: 500, fx: 'g' },
    '9329c20e-2809-7b4b-2cc8-207944dc70bf': { d: 100, fx: 'b' },
    '188cafa7-c96d-05f2-93a1-32690787c53a': { d: 200, fx: 'b' },
    'f413ce83-000a-55c6-1b97-ca71ed641af9': { d: 200, fx: 'b' },
    '2a0f10d4-c964-8d55-9344-1297faf8e170': { d: 200, fx: 'b' },
    '1f6e3ad5-5543-5eab-d3eb-9c8df254e3e0': { d: 200, fx: 'b' },
    '39da0660-16d6-84d3-34b2-edceed664141': { d: 200, fx: 'b' },
    'aca55abb-644f-2c6b-9d99-e039275994f0': { d: 200, fx: 'b' },
    'aca55abb-644f-2c6b-9d99-e039275994ed': { d: 200, fx: 'b' },
    'd4a43a74-eda1-db2b-bb18-1a3120b5d8f5': { d: 200, fx: 'b' },
    'd4a43a74-eda1-db2b-bb18-1a3120b5d8f7': { d: 200, fx: 'b' },
    '7652ffc4-a06b-6afc-64e8-1f8c722d1375': { d: 200, fx: 'b' },
    'f1b8522e-9d21-a712-e6aa-9d8b252ea55e': { d: 200, fx: 'b' },
    '28f8c424-5a0c-1696-3f28-892e9e672694': { d: 100, fx: 'b' },
    '386414eb-c014-ab10-626c-a898664d37b0': { d: 200, fx: 'b' },
    '10d601c9-9854-a2af-5786-ea92e1d450d1': { d: 300, fx: 'b' },
    '0a953c4f-fb48-5964-5a72-d91491f4c999': { d: 200, fx: 'b' },
    '02fd1182-22d9-0b95-d413-680c47e91800': { d: 200, fx: 'b' },
    'bab3f8d7-b0df-8831-6626-3322e43d6e0c': { d: 200, fx: 'b' },
    '91836913-77ab-c48d-12b9-1a4f4efacd35': { d: 200, fx: 'b' },
    '2f210b56-4dd7-067f-c786-a6cff9b97dad': { d: 200, fx: 'b' },
    'abf002c0-a56c-0d8f-2c89-321507cb5015': { d: 200, fx: 's' },
    '3b1dac7c-d603-ed44-5bc3-410a0ce5b3ec': { d: 200, fx: 'b' },
    'f89eaf18-b426-df3a-579f-5be37945ddc6': { d: 300, fx: 'b' },
    '2e584957-d1fb-7f92-dee1-ee5777ab2f65': { d: 400, fx: 'b' },
    '5cc9496a-63de-ee71-93d7-937c8ebb52b7': { d: 300, fx: 'g' },
    '005a2ab4-8bf8-7792-5da0-5fdcb15167a4': { d: 300, fx: 'b' }
  };
  var INITIAL_TRANSFORM = {
    b: 'translateY(100px)',
    l: 'translateX(-100px)',
    g: 'scale(0)',
    s: 'scale(1.25)'
  };
  var OUT_QUART = 'cubic-bezier(.165,.84,.44,1)';
  var REVEAL_DURATION = 1000;

  function initReveal() {
    if (typeof IntersectionObserver === 'undefined') return;
    var els = Object.keys(REVEAL)
      .map(function (id) { return document.querySelector('[data-w-id="' + id + '"]'); })
      .filter(Boolean);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(function (el) { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var cfg = REVEAL[el.getAttribute('data-w-id')];
          if (!cfg) return;
          el.style.transition =
            'opacity ' + REVEAL_DURATION + 'ms ' + OUT_QUART + ' ' + cfg.d + 'ms, transform ' +
            REVEAL_DURATION + 'ms ' + OUT_QUART + ' ' + cfg.d + 'ms';
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.willChange = 'auto';
          io.unobserve(el);
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -10% 0px' }
    );

    els.forEach(function (el) {
      var cfg = REVEAL[el.getAttribute('data-w-id')];
      if (!cfg) return;
      el.style.opacity = '0';
      el.style.transform = INITIAL_TRANSFORM[cfg.fx];
      el.style.willChange = 'opacity, transform';
      io.observe(el);
    });
  }

  // ============================================================
  // Navbar mobile menu
  // ============================================================
  function initNavbar() {
    var btn = document.querySelector('.menu-button.w-nav-button');
    var menu = document.querySelector('.nav-menu-wrapper');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ============================================================
  // Features tabs
  // ============================================================
  function initTabs() {
    var menu = document.querySelector('.tabs-menu');
    if (!menu) return;
    var links = Array.prototype.slice.call(menu.querySelectorAll('.tab-link'));
    var panes = Array.prototype.slice.call(document.querySelectorAll('.w-tab-pane'));
    if (links.length === 0) return;

    function setContentState(link, isActive) {
      var content = link.querySelector('.tab-button-content');
      var arrow = link.querySelector('.arrow-right');
      if (content) {
        content.style.transition = 'height 200ms ease';
        content.style.height = isActive ? 'auto' : '0px';
      }
      if (arrow) arrow.style.transform = isActive ? 'rotate(-50deg)' : 'rotate(0deg)';
    }

    function activate(index) {
      links.forEach(function (link, i) {
        var isActive = i === index;
        link.classList.toggle('w--current', isActive);
        if (panes[i]) panes[i].classList.toggle('w--tab-active', isActive);
        setContentState(link, isActive);
      });
    }

    links.forEach(function (link, i) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        activate(i);
      });
    });

    var activeIndex = 0;
    links.forEach(function (link, i) {
      if (link.classList.contains('w--current')) activeIndex = i;
    });
    activate(activeIndex);
  }

  // ============================================================
  // Testimonials slider
  // ============================================================
  function initSlider() {
    var track = document.querySelector('.slider-track');
    if (!track) return;
    var total = track.children.length;
    if (total === 0) return;
    var index = 0;

    function go(i) {
      index = (i + total) % total;
      track.style.transform = 'translateX(-' + index * 100 + '%)';
    }

    var prevBtn = document.querySelector('.left-arrow.is-testimonial');
    var nextBtn = document.querySelector('.right-arrow.is-testimonial');
    if (prevBtn) prevBtn.addEventListener('click', function () { go(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { go(index + 1); });
  }

  // ============================================================
  // FAQ accordion
  // ============================================================
  function initFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.faq-items-wrapper'));
    items.forEach(function (item) {
      function toggle() {
        var isOpen = item.classList.contains('open');
        if (isOpen) {
          item.style.transition = 'height 500ms ease';
          item.style.height = '70px';
          item.classList.remove('open');
          item.setAttribute('aria-expanded', 'false');
        } else {
          item.style.transition = 'none';
          item.style.height = 'auto';
          var h = item.scrollHeight;
          item.style.height = '70px';
          void item.offsetHeight;
          item.style.transition = 'height 500ms ease';
          item.style.height = h + 'px';
          item.classList.add('open');
          item.setAttribute('aria-expanded', 'true');
        }
      }
      item.addEventListener('click', toggle);
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // ============================================================
  // Contact form -> WhatsApp
  // ============================================================
  function initContactForm() {
    var form = document.querySelector('.section-contact form.form-block');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var name = fd.get('name') || '';
      var email = fd.get('Email') || '';
      var company = fd.get('Company') || '';
      var phone = fd.get('Phone') || '';
      var message = fd.get('Message') || '';
      var subject = '[Digital Dream Web] Project inquiry from ' + (name || 'a client');
      var body = [
        subject,
        '',
        'Name: ' + name,
        'Email: ' + email,
        'Company: ' + company,
        'Phone: ' + phone,
        '',
        message
      ].join('\n');
      window.location.href = 'https://wa.me/923255635495?text=' + encodeURIComponent(body);
    });
  }

  // ============================================================
  // Footer newsletter
  // ============================================================
  function initNewsletter() {
    var form = document.querySelector('.footer .form-flex');
    if (!form) return;
    var wrapper = form.closest('.newsletter-wrapper');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[name="email"]');
      var checked = form.querySelector('input[name="privacy"]');
      if (!email || !email.value) return;
      if (checked && !checked.checked) return;
      var success = document.createElement('div');
      success.className = 'success-message w-form-done not-hidden';
      var msg = document.createElement('div');
      msg.className = 'message';
      msg.textContent = 'Thank you! Your submission has been received!';
      success.appendChild(msg);
      if (wrapper) {
        var title = wrapper.querySelector('.text-regular.is-white');
        wrapper.innerHTML = '';
        if (title) wrapper.appendChild(title);
        wrapper.appendChild(success);
      } else {
        form.parentNode.replaceChild(success, form);
      }
    });
  }

  // ============================================================
  // Init
  // ============================================================
  function init() {
    initReveal();
    initNavbar();
    initTabs();
    initSlider();
    initFaq();
    initContactForm();
    initNewsletter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
