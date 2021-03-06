(function() {
    const main = document.getElementById("main");
    const header = document.getElementById("header");

    const menuWrapper = header.querySelector(".menu");
    const menuIcon = header.querySelector(".menu-icon");
    const menuBody = header.querySelector(".menu__body");
    const menuItems = header.querySelectorAll(".menu__item__chevron");

    function setMenuEventListeners() {
        menuIcon.addEventListener('click', toggleMenuVisibility);
        menuIcon.addEventListener('click', animateMenuIcon);
        window.addEventListener('resize', hideMenu);
        main.addEventListener('click', hideMenu);
        menuItems.forEach(item => item.addEventListener('click', showChevron));
    }

    function toggleMenuVisibility() {
        menuWrapper.classList.toggle('show');
        menuBody.classList.toggle('show');
    }

    function animateMenuIcon() {
        menuIcon.classList.toggle('show');
    }

    function hideMenu() {
        menuWrapper.classList.remove('show');
        menuBody.classList.remove('show');
        menuIcon.classList.remove('show');
        menuItems.forEach(item => item.classList.remove("menu__item__chevron-show"));
    }

    function showChevron() {
        this.classList.add("menu__item__chevron-show");
        const dropdown = this.querySelector(".menu__dropdown");
        if (dropdown.style.maxHeight) {
            dropdown.style.maxHeight = null;
        } else {
            dropdown.style.maxHeight = dropdown.scrollHeight + "px";
        }
    }

    return setMenuEventListeners();
})()
