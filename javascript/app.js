// select appropriate nodes from DOM
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".backdrop");

// action identifier
const ACTION = "close";

function mobileMenu() {
  backDrop.classList.toggle(ACTION);
  mobileNav.classList.toggle(ACTION);
}

toggleButton.addEventListener("click", () => {
  mobileMenu();
});

backDrop.addEventListener("click", () => {
  mobileMenu();
});
