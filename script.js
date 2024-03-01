// scripts.js
// Custom JavaScript can be added here.

// Example: This could be a script to handle a mobile menu toggle.
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('#menu');
  
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });
  
  // Add additional JavaScript after this line.
  