const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.navigation');
const stickyNavEl = document.querySelector('.navigation');

// Mobile nav
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Sticky nav bar
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(stickyNavEl);
