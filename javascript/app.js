// select appropriate nodes from DOM
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const backDrop = document.querySelector(".backdrop");
const arrowDown = document.querySelector("#arrow-down");

// action identifier
const ACTION = "close";

// a function for adding and removing action from classlist
function mobileMenu() {
  backDrop.classList.toggle(ACTION);
  mobileNav.classList.toggle(ACTION);
}

// event listener for toggle button
toggleButton.addEventListener("click", mobileMenu);

// event listener for overlay or back drop
backDrop.addEventListener("click", mobileMenu);
