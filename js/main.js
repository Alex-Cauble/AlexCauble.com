const header = document.querySelector('header');
const homeHero = document.querySelector('.home-hero');

const sectionOneOptions = {
  rootMargin: '-50px 0px 0px 0px',
};
const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      console.log(entry.target);
      if (!entry.isIntersecting) {
        header.classList.add('nav-scrolled');
      } else {
        header.classList.remove('nav-scrolled');
      }
    });
  },
  sectionOneOptions,
);

sectionOneObserver.observe(homeHero);
