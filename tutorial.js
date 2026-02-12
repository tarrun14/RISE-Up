document.addEventListener("DOMContentLoaded", () => {
  
  /* ==============================================
      1. THEME TOGGLE (Dark / Light Mode)
  ============================================== */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // A. Check Local Storage on load
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
  }

  // B. Handle Click Event
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      body.classList.toggle("light");

      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  /* ==============================================
      2. MOBILE MENU (Side Drawer)
  ============================================== */
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    
    // Toggle Menu on Hamburger Click
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation(); 
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Close Menu when clicking OUTSIDE
    document.addEventListener("click", (e) => {
      if (navMenu.classList.contains("active")) {
        // If click is NOT on menu AND NOT on toggle button
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.remove("active");
          menuToggle.classList.remove("open");
        }
      }
    });
  }

  /* ==============================================
      REMOVED: Active link logic
      Now handled by nav.js automatically
  ============================================== */

});