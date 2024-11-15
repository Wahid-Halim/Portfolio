const heroImg = document.getElementById("heroImg");
const heroSmileImg = document.getElementById("heroSmileImg");
const btnTalk = document.getElementById("talk-btn");
let items = document.querySelectorAll(".skill");

const cards = document.querySelectorAll(".service-card");
const wrapper = document.querySelector(".services-container");
const slides = document.querySelectorAll(".slide-container");

const HumIcon = document.querySelector(".hamburger-icon");
const PhoneNav = document.querySelector(".phone-nav");
const links = document.querySelectorAll(".phone__nav-item");
const main = document.querySelector("main");

const smile = function (el) {
  el.addEventListener("mouseover", () => {
    heroImg.classList.add("hidden"); // Hide the original image
    heroSmileImg.classList.remove("hidden"); // Show the hover image
  });

  el.addEventListener("mouseout", () => {
    heroImg.classList.remove("hidden"); // Show the original image
    heroSmileImg.classList.add("hidden"); // Hide the hover image
  });
};
smile(btnTalk);

// skill section

items.forEach((item) => {
  item.addEventListener("mousemove", (e) => {
    let positionPx = e.x - item.getBoundingClientRect().left;
    let positionX = (positionPx / item.offsetWidth) * 100;

    let positionPy = e.y - item.getBoundingClientRect().top;
    let positionY = (positionPy / item.offsetHeight) * 100;

    item.style.setProperty("--rX", 0.5 * (50 - positionY) + "deg");
    item.style.setProperty("--rY", -0.5 * (50 - positionX) + "deg");
  });

  item.addEventListener("mouseout", () => {
    item.style.setProperty("--rX", "0deg");
    item.style.setProperty("--rY", "0deg");
  });
});

wrapper.addEventListener("mousemove", function ($event) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = $event.clientX - rect.left;
    const y = $event.clientY - rect.top;

    card.style.setProperty("--xPos", `${x}px`);
    card.style.setProperty("--yPos", `${y}px`);
  });
});

// slider

let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// Phone menu

HumIcon.addEventListener("click", () => {
  PhoneNav.style.left = "0";
  HumIcon.classList.toggle("open");
  main.classList.toggle("overlay");
  // stop scroll while menu is open 
  document.querySelector('body').classList.toggle('overflow')
  if (!HumIcon.classList.contains("open")) {
    PhoneNav.style.left = "-100%";
  }
});

// Phone menu while choosing the link

links.forEach((link) => {
  link.addEventListener("click", () => {
    PhoneNav.style.left = "-100%";
    HumIcon.classList.toggle("open");
    main.classList.remove("overlay");

    document.querySelector('body').classList.remove('overflow')
  });
});

// clicking the overlay
main.addEventListener("click", () => {
  if (main.classList.contains("overlay")) {
    main.classList.remove("overlay");
    PhoneNav.style.left = "-100%";
    HumIcon.classList.remove("open");
    document.querySelector('body').classList.remove('overflow')


  }
});
