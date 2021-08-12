const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav-toggle");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_open");
}

navToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);


//Método de búsqueda de usuarios
$(document).ready(function() {
    $("#searchText1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#busqueda tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});