let items = document.getElementsByClassName("carousel__item");
let itemsCount = items.length;
let slide = 0;
let isMoving = true;

function initCarousel() {
    setInitialClasses();
    setEventListeners();
    isMoving = false;
}

initCarousel();

function setInitialClasses() {
    items[itemsCount - 1].classList.add("carousel__item__prev")
    items[0].classList.add("carousel__item__active");
    items[1].classList.add("carousel__item__next");
};

function setEventListeners() {
    let prevBtn = document.getElementsByClassName("carousel__btn-prev")[0];
    let nextBtn = document.getElementsByClassName("carousel__btn-next")[0];

    prevBtn.addEventListener("click", movePrev);
    nextBtn.addEventListener("click", moveNext);
};

function movePrev() {
    if (!isMoving) {
        if (slide === 0) {
            slide = itemsCount - 1;
        } else {
            slide--;
        }
    }

    moveTo(slide);
};

function moveNext() {
    if (!isMoving) {
        if (slide === itemsCount - 1) {
            slide = 0;
        } else {
            slide++;
        }
    }

    moveTo(slide);
};

function disableMoving() {
    isMoving = true;
    setTimeout(() => { isMoving = false }, 500);
};

function moveTo(slide) {
    if (!isMoving) {
        disableMoving();

        let newNextSlide = slide + 1;
        let newPrevSlide = slide - 1;

        if (slide === 0) {
            newPrevSlide = itemsCount - 1;
        } else if (slide === itemsCount - 1) {
            newNextSlide = 0;
        }

        if (itemsCount > 3) {
            let oldNextSlide = newNextSlide + 1;
            let oldPrevSlide = newPrevSlide - 1;

            if (newNextSlide === itemsCount - 1) {
                oldNextSlide = 0;
            };
            
            if (newPrevSlide === 0) {
                oldPrevSlide = itemsCount - 1;
            };

            items[oldPrevSlide].className = "carousel__item";
            items[oldNextSlide].className = "carousel__item";
        };

        items[newPrevSlide].className = "carousel__item carousel__item__prev";
        items[slide].className = "carousel__item carousel__item__active";
        items[newNextSlide].className = "carousel__item carousel__item__next";
    }
}