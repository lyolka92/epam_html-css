let menuWrapper = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu-icon");
let menuBody = document.querySelector(".menu__body");
let menuItems = document.querySelectorAll(".menu__item__chevron");

setEventListeners();

function setEventListeners() {
    menuIcon.addEventListener('click', toggleMenu);
    menuIcon.addEventListener('click', animateMenuIcon);
    window.addEventListener('resize', returnDefaultMenu);

    menuItems.forEach(item => item.addEventListener('click', showChevron));
}

function toggleMenu() {
    menuWrapper.classList.toggle('show');
    menuBody.classList.toggle('show');
}

function animateMenuIcon() {
    menuIcon.classList.toggle('show');
}

function returnDefaultMenu() {
    menuWrapper.classList.remove('show');
    menuBody.classList.remove('show');
    menuIcon.classList.remove('show');
    menuItems.forEach(item => {
        item.classList.remove("menu__item__chevron-show");
    });
}

function showChevron() {
    this.classList.add("menu__item__chevron-show");

    let dropdown = this.querySelector(".menu__dropdown");
    if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
}