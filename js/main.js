let navItems = document.querySelector('.nav_items');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function(){
hamburger.classList.toggle('open');
navItems.classList.toggle('open');
})