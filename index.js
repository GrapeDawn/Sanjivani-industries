const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

function isClickedInsideSidebar(event) {
  return sidebar.contains(event.target) || menuIcon.contains(event.target);
}

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

const listItems = document.querySelectorAll('.side-list-itom');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
});

document.addEventListener('click', (event) => {
  if (!isClickedInsideSidebar(event)) {
    sidebar.classList.add('hidden');
  }
});

// script.js

// script.js

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

let counter = 0;

const slideWidth = images[0].clientWidth;
carousel.style.width = `${slideWidth}px`; // Set carousel width to match slide width

function slideTo(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(${-slideWidth * index}px)`;
  counter = index;
}

setInterval(() => {
  slideTo(counter + 1);
}, 3000); // Change slide every 3 seconds
