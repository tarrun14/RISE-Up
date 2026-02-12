// THEME TOGGLE — CONNECT (GLOBAL)

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.remove("dark", "light");
  body.classList.add(savedTheme);
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");

  body.classList.toggle("dark", !isDark);
  body.classList.toggle("light", isDark);

  localStorage.setItem("theme", isDark ? "light" : "dark");
});
// MOBILE MENU LOGIC
const mobileBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav");

mobileBtn.addEventListener("click", () => {
  // Toggle the menu visibility
  nav.classList.toggle("active");
  // Toggle the hamburger X animation
  mobileBtn.classList.toggle("active");
});

// Close menu when clicking a link (optional UX improvement)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    mobileBtn.classList.remove("active");
  });
});