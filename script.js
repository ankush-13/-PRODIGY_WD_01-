document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
  
    // Add a class to the navbar when scrolling
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
  });
