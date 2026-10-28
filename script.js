const themeButton = document.getElementById("theme-toggle");
const html = document.documentElement;

function updateIcon() {
    if (!themeButton) {
        return;
    }
    const icon = themeButton.querySelector("i");
    if (html.getAttribute("data-theme") === "dark") {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

if (localStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
}

updateIcon();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        if (html.getAttribute("data-theme") === "dark") {
            html.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }
        updateIcon();
    });
}

const menuButton = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });
}