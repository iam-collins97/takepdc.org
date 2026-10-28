const themeButton = document.getElementById("theme-toggle");
const html = document.documentElement;

localStorage.removeItem("theme");

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

if (sessionStorage.getItem("theme") === "dark") {
    html.setAttribute("data-theme", "dark");
}

updateIcon();

if (themeButton) {
    themeButton.addEventListener("click", function () {
        if (html.getAttribute("data-theme") === "dark") {
            html.removeAttribute("data-theme");
            sessionStorage.setItem("theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
            sessionStorage.setItem("theme", "dark");
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

const waCard = document.getElementById("wa-card");
const waClose = document.getElementById("wa-close");

if (waCard && sessionStorage.getItem("waClosed") === "yes") {
    waCard.classList.add("hidden");
}

if (waCard && waClose) {
    waClose.addEventListener("click", function () {
        waCard.classList.add("hidden");
        sessionStorage.setItem("waClosed", "yes");
    });
}