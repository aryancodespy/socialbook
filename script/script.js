const dropdownMenu = document.querySelector(".dropdown-menu");

function settingsMenu(){
    dropdownMenu.classList.toggle("dropdown-menu-height");
}

const darkMode = document.querySelector("#dark-btn");

darkMode.onclick = function(){
    darkMode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme")
}