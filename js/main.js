//Intersection Observer Section
const header = document.getElementById('head');
const homeHero = document.querySelector('.home-hero');

const sectionOneOptions = {
  rootMargin: '-50px 0px 0px 0px',
};
const sectionOneObserver = new IntersectionObserver((entries, sectionOneObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(homeHero);

//Coffee Counter Section
const coffeeCounter = document.getElementById('coffee-counter');

function parseDate(str) {
  let mdy = str.split('/');
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function dateDiff(firstDate, secondDate) {
  return (secondDate - firstDate) / (1000 * 60 * 60 * 24);
}

function getCoffeePots() {
  const coffeesMade = dateDiff(parseDate('20/8/2008'), Date.now());
  return parseFloat(coffeesMade * 1).toFixed(6);
}
setInterval(() => {
  coffeeCounter.innerText = getCoffeePots();
}, 1000);
