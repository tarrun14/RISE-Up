/* =========================================
   NAVBAR.JS - Handles Navigation Logic + Theme Toggle
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ACTIVE PAGE HIGHLIGHTING
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.navbar nav a, #navMenu a');
  
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPage) {
        link.classList.add('active-page');
      }
    });
    
    // 2. THEME TOGGLE FUNCTIONALITY
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark', currentTheme === 'dark');
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      
      // Save preference to localStorage
      const theme = body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    });

    // 3. MOBILE MENU TOGGLE (if you need it)
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        navMenu.classList.add('active');
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    }
});