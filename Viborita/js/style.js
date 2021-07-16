const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav-toggle");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_open");
}

navToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);