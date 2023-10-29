// Setup navbar
const navBar = document.querySelector(".nav");
// Selecting nav-button
const navBtn = document.querySelector(".special-btn");
// show nav on click and close on click again
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-open");
});
