document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     1. THEME TOGGLE LOGIC
     ========================================= */
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Load saved theme from LocalStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("dark", "light");
    body.classList.add(savedTheme);
  } else {
    // Default to dark if no theme is saved
    if (!body.classList.contains("dark") && !body.classList.contains("light")) {
      body.classList.add("dark");
    }
  }

  // Toggle on click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = body.classList.contains("dark");

      // Flip the classes
      if (isDark) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  /* =========================================
     2. MOBILE MENU LOGIC (The Fix)
     ========================================= */
  const openBtn = document.getElementById('openBtn');
  const closeBtn = document.getElementById('closeBtn');
  const navMenu = document.getElementById('navMenu');

  // Debugging: This helps ensure elements exist
  if (!openBtn || !navMenu) {
    console.error("Menu elements not found. Check HTML IDs.");
  }

  if (openBtn && navMenu) {
    // Open Menu
    openBtn.addEventListener('click', () => {
      navMenu.classList.add('active');
    });

    // Close Menu (X Button)
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    }

    // Close Menu (Clicking any link)
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
});
// 1. Select all the elements we need
    const pills = document.querySelectorAll('.pill');
    const cards = document.querySelectorAll('.card');

    // 2. Add a click event to every pill
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            
            // --- A. VISUAL UPDATE ---
            // Remove 'active' from all pills
            pills.forEach(p => p.classList.remove('active'));
            // Add 'active' to the one that was clicked
            pill.classList.add('active');

            // --- B. FILTER LOGIC ---
            const selectedCategory = pill.innerText.trim(); // e.g., "Collaboration"

            cards.forEach(card => {
                // Find the category badge inside this specific card
                const cardCategory = card.querySelector('.badge.category')?.innerText.trim();

                // Check if we should show this card
                // Show if "All" is selected OR if the card's category matches the pill
                if (selectedCategory === 'All' || (cardCategory && cardCategory.includes(selectedCategory))) {
                    card.style.display = 'flex'; // Show card
                    
                    // Optional: Add a subtle fade-in animation
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none'; // Hide card
                }
            });
        });
    });

    // --- BONUS: SEARCH BAR LOGIC ---
    const searchInput = document.querySelector('.search-box input');
    
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();

            cards.forEach(card => {
                const title = card.querySelector('h3')?.innerText.toLowerCase() || "";
                const desc = card.querySelector('p')?.innerText.toLowerCase() || "";
                
                if (title.includes(searchText) || desc.includes(searchText)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
