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
const typewriters = document.querySelectorAll(".typewriter");

typewriters.forEach(function (el) {
    const fullText = el.textContent.trim();
    el.setAttribute("aria-label", fullText);
    el.textContent = "";

    const words = fullText.split(" ");

    words.forEach(function (word, w) {
        const wordSpan = document.createElement("span");
        wordSpan.className = "tw-word";

        for (const ch of word) {
            const letter = document.createElement("span");
            letter.className = "tw-letter";
            letter.textContent = ch;
            wordSpan.appendChild(letter);
        }

        el.appendChild(wordSpan);

        if (w < words.length - 1) {
            el.appendChild(document.createTextNode(" "));
        }
    });

    const letters = el.querySelectorAll(".tw-letter");

    function startTyping() {
        let i = 0;
        const timer = setInterval(function () {
            if (i < letters.length) {
                letters[i].classList.add("show");
                i++;
            } else {
                clearInterval(timer);
            }
        }, 70);
    }

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    startTyping();
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.6 });
        observer.observe(el);
    } else {
        startTyping();
    }
});