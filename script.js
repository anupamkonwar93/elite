const left = document.querySelector(".left-bg");
const right = document.querySelector(".right-bg");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  left.style.transform = `translateY(-${scrollY * 0.2}px)`;
  right.style.transform = `translateY(${scrollY * 0.2}px)`;
});


let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Scrolling DOWN
    header.classList.add("nav-hidden");
  } else {
    // Scrolling UP
    header.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});

