// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});

// LOGIN FORM
const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  // Fake login success
  alert("Login successful ✅");

  // Redirect to profile page
  window.location.href = "profile.html";
});