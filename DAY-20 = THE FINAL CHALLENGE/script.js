const navBar = document.querySelector(".nav");
const navBtn = document.querySelector(".toggle-btn");
navBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-open");
});
