const dropdownMenu = document.querySelector(".dropdown-menu");

function settingsMenu(){
    dropdownMenu.classList.toggle("dropdown-menu-height");
}

const darkMode = document.querySelector("#dark-btn");

darkMode.onclick = function(){
    darkMode.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light"){
    darkMode.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark"){
    darkMode.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

else {
    localStorage.setItem("theme", "light");
}