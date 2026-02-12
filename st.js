const toggle = document.getElementById("toggle");
const body = document.body;

const lightLabel = document.querySelector(".light-label");
const darkLabel = document.querySelector(".dark-label");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  lightLabel.classList.toggle("active");
  darkLabel.classList.toggle("active");
});
