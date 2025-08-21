const burgerButton = document.querySelector('.burger-button');
const menu = document.querySelector('.tabs-ul');

burgerButton.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});