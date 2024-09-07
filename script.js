document.addEventListener('DOMContentLoaded', function() {
    const navToggleLabel = document.querySelector('.nav-toggle-label');
    const navBar = document.querySelector('.nav-bar');
  
    navToggleLabel.addEventListener('click', function() {
      navBar.classList.toggle('open');
    });
  });
  