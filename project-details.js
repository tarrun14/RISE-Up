document.addEventListener('DOMContentLoaded', () => {
  
  /* ==============================================
     1. THEME TOGGLE (Dark / Light Mode)
  ============================================== */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  
  // Check Local Storage on load
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    body.classList.remove("dark");
  }
  
  // Handle Click Event
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      body.classList.toggle("light");
      
      // Save preference to Local Storage
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
      e.stopPropagation(); // Prevent this click from triggering the document listener
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Close Menu when clicking OUTSIDE (on the blurred content)
    document.addEventListener("click", (e) => {
      // If menu is open...
      if (navMenu.classList.contains("active")) {
        // AND the click was NOT inside the menu
        // AND the click was NOT on the toggle button
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.remove("active");
          menuToggle.classList.remove("open");
        }
      }
    });

    // Close menu when clicking on a nav link (for smooth UX on mobile)
    const navLinks = navMenu.querySelectorAll("a:not(.nav-profile)");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }

  /* ==============================================
     3. TAB SWITCHING
  ============================================== */
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");
  
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      
      // Add active class to clicked tab
      tab.classList.add("active");
      
      // Show/hide content sections
      contents.forEach(c => {
        c.hidden = c.dataset.content !== target;
      });
    });
  });

  /* ==============================================
     4. ACTIVE LINK HIGHLIGHTER (Optional)
  ============================================== */
  // This automatically adds class="active" to the link matching the current page
  const currentPath = window.location.pathname;
  const navLinksAll = document.querySelectorAll(".nav-menu a:not(.nav-profile)");

  navLinksAll.forEach((link) => {
    const linkPath = link.getAttribute("href");

    // Check if the link matches the current URL
    if (linkPath && currentPath.includes(linkPath)) {
      link.classList.add("active");
    }
  });

});
// Add to your existing JavaScript
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});