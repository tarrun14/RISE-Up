document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     1. THEME TOGGLE
     ========================================= */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) body.className = savedTheme;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    });
  }

  /* =========================================
     2. NAVIGATION MENU (Combined & Optimized)
     ========================================= */
  const openBtn = document.querySelector('.menu-btn');
  const closeBtn = document.getElementById('closeBtn');
  const navMenu = document.getElementById('navMenu');

  const toggleNav = (forceClose = false) => {
    const isActive = forceClose ? false : !navMenu.classList.contains('active');
    navMenu.classList.toggle('active', isActive);
    openBtn.classList.toggle('active', isActive);
  };

  if (openBtn) openBtn.addEventListener('click', () => toggleNav());
  if (closeBtn) closeBtn.addEventListener('click', () => toggleNav(true));
  
  document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', () => toggleNav(true));
  });

  /* =========================================
     3. CATEGORY DROPDOWN
     ========================================= */
  const categoryToggleBtn = document.getElementById("categoryToggle");
  const categoryMenuBox = document.getElementById("categoryMenu");
  const categoryActiveText = document.getElementById("activeCategory");

  if (categoryToggleBtn && categoryMenuBox) {
    categoryToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      categoryMenuBox.classList.toggle("show");
    });

    document.querySelectorAll(".category-option").forEach(option => {
      option.addEventListener("click", () => {
        if (categoryActiveText) categoryActiveText.textContent = option.textContent;
        categoryMenuBox.classList.remove("show");
      });
    });

    document.addEventListener("click", () => categoryMenuBox.classList.remove("show"));
  }

  /* =========================================
     4. FILTER PILLS (Content Switching Logic)
     ========================================= */
  const pills = document.querySelectorAll(".pill");
  const cards = document.querySelectorAll(".card-link");

  if (pills.length > 0) {
    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        // 1. UI Update: Set active pill
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        // 2. Filter Logic
        const filterValue = pill.getAttribute("data-filter");

        cards.forEach(card => {
          const cardCategory = card.getAttribute("data-category");

          if (filterValue === "all" || filterValue === cardCategory) {
            card.style.display = "block"; // Show match
            
            // Optional: Add a small fade-in animation
            card.style.animation = "fadeIn 0.3s ease forwards";
          } else {
            card.style.display = "none"; // Hide non-match
          }
        });
      });
    });
  }
});