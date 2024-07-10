// toggle class active untuk navbar
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
// ketika icon menu di klik
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Animasi Typing!
var typed = new Typed(".multiple-text", {
  strings: ["Web Developer.", "UI UX Design.", "Web Design."],
  typeSpeed: 50,
  backSpeed: 100,
  loop: true,
});

// toggle dark-mode
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
