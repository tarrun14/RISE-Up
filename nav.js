/* =========================================
   NAVBAR.JS - Handles Navigation Logic Only
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Get the current page filename (e.g., "hub.html")
    // If path ends in "/" (root), assume it is "index.html"
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
    // 2. Select all navigation links
    // This targets links inside .navbar OR the mobile menu #navMenu
    const navLinks = document.querySelectorAll('.navbar nav a, #navMenu a');
  
    // 3. Loop through and check for match
    navLinks.forEach(link => {
      // Get the href value (e.g., "project.html")
      const linkHref = link.getAttribute('href');
  
      // If the link matches the current page, mark it active
      if (linkHref === currentPage) {
        link.classList.add('active-page');
      }
    });
    
});
// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'ta,en',
        autoDisplay: false
    }, 'google_translate_element');
}

// Function to trigger translation
function changeLanguage(langCode) {
    const select = document.querySelector('#google_translate_element select');
    if (select) {
        // Force reset the select to trigger a fresh 'change' event every time
        select.value = ""; 
        
        setTimeout(() => {
            select.value = langCode;
            select.dispatchEvent(new Event('change'));
        }, 10); // Small delay ensures the browser registers the reset
    }
}
// Wait for DOM to load to attach listeners
document.addEventListener('DOMContentLoaded', () => {
    const tamilBtn = document.getElementById('toTamil');
    const englishBtn = document.getElementById('toEnglish');

    if (tamilBtn) tamilBtn.addEventListener('click', () => changeLanguage('ta'));
    if (englishBtn) englishBtn.addEventListener('click', () => changeLanguage('en'));
});

// Load Google Script Dynamically
(function() {
    var gt = document.createElement('script');
    gt.type = 'text/javascript';
    gt.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gt);
})();