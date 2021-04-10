//Intersection Observer Section
const header = document.getElementById("head");
const homeHero = document.querySelector(".home-hero");

const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    }
    if (entry.isIntersecting) {
      header.classList.remove("nav-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(homeHero);
// Click Down Arrow Section
const dwnArrowBtn = document.querySelector("#home-down-arrow");
dwnArrowBtn.addEventListener("click", () => {
  window.scrollBy({ top: windowHeight, behavior: "smooth" });
});
// Click Contact Me
const homeHeroButton = document.querySelector(".btn-home-hero");
homeHeroButton.addEventListener("click", () => {
  // window.scrollTo(0, document.body.scrollHeight);
  window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight });
});

//Coffee Counter Section
const coffeeCounter = document.getElementById("coffee-counter");

function parseDate(str) {
  let mdy = str.split("/");
  return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function dateDiff(firstDate, secondDate) {
  return (secondDate - firstDate) / (1000 * 60 * 60 * 24);
}

function getCoffeePots() {
  const coffeesMade = dateDiff(parseDate("20/8/2008"), Date.now());
  return parseFloat(coffeesMade * 1).toFixed(6);
}
setInterval(() => {
  coffeeCounter.innerText = getCoffeePots();
}, 1000);
