const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.navigation-header');
const allLinks = document.querySelectorAll('a:link');
const sectionHeroEl = document.querySelector('.section-hero');
const sectionRegEl = document.querySelector('.section-registration');
// const sectionHeroEl = document.querySelector('.section-hero');

// Mobile nav
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');
    console.log(href);

    // scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      e.preventDefault();
    }

    // CLose mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
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
    rootMargin: '-1000px',
  }
);
obs.observe(headerEl);
