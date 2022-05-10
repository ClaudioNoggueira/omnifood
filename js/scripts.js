let buttonEl = document.querySelector('.mobile-nav-button');

buttonEl.addEventListener('click', () => {
  const headerEl = document.querySelector('header');
  headerEl.classList.toggle('nav-open');
});