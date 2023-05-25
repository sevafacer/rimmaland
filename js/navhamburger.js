const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-ul");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  document.body.style.overflow = "initial";
}