// MOBILE NAVIGATION BUTTON CLICK EVENT
const buttonEl = document.querySelector('.mobile-nav-button');

buttonEl.addEventListener('click', () => {
  const headerEl = document.querySelector('header');
  headerEl.classList.toggle('nav-open');
});

// COPYRIGHT YEAR
const yearEl = document.querySelector('.copyrightYear');

yearEl.textContent = new Date().getFullYear();