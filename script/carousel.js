const projectsSection = document.getElementById("projects");
let projectsCarouselNode = projectsSection.querySelector(".carousel");

let projectsCarousel = new Carousel(projectsCarouselNode);
projectsCarousel.init();

function Carousel(carouselNode) {
    const prevBtn = carouselNode.querySelector(".carousel__btn-prev");
    const nextBtn = carouselNode.querySelector(".carousel__btn-next");
    const slides = carouselNode.querySelectorAll(".carousel__item")
    const slidesCount = slides.length;

    let activeSlideIndex = 0;
    let isMoving = true;

    this.init = function() {
        setInitialCarouselClasses();
        setCarouselEventListeners();
        isMoving = false;
    }

    function setInitialCarouselClasses() {
        slides[slidesCount - 1].classList.add("carousel__item__prev");
        slides[0].classList.add("carousel__item__active");
        slides[1].classList.add("carousel__item__next");
    }

    function setCarouselEventListeners() {
        prevBtn.addEventListener("click", movePrev);
        nextBtn.addEventListener("click", moveNext);
    }

    function movePrev() {
        if (!isMoving) {
            if (activeSlideIndex === 0) {
                activeSlideIndex = slidesCount - 1;
            } else {
                activeSlideIndex -= 1;
            }
            moveTo(activeSlideIndex);
        }
    }

    function moveNext() {
        if (!isMoving) {
            if (activeSlideIndex === slidesCount - 1) {
                activeSlideIndex = 0;
            } else {
                activeSlideIndex += 1;
            }
            moveTo(activeSlideIndex);
        }
    }

    function disableMoving() {
        isMoving = true;
        setTimeout(() => { isMoving = false }, 500);
    }

    function moveTo() {
        if (!isMoving) {
            disableMoving();

            let newNextSlide = activeSlideIndex + 1;
            let newPrevSlide = activeSlideIndex - 1;

            if (activeSlideIndex === 0) {
                newPrevSlide = slidesCount - 1;
            } else if (activeSlideIndex === slidesCount - 1) {
                newNextSlide = 0;
            }

            if (slidesCount > 3) {
                let oldNextSlide = newNextSlide + 1;
                let oldPrevSlide = newPrevSlide - 1;

                if (newNextSlide === slidesCount - 1) {
                    oldNextSlide = 0;
                }

                if (newPrevSlide === 0) {
                    oldPrevSlide = slidesCount - 1;
                }

                slides[oldPrevSlide].className = "carousel__item";
                slides[oldNextSlide].className = "carousel__item";
            }

            slides[newPrevSlide].className = "carousel__item carousel__item__prev";
            slides[activeSlideIndex].className = "carousel__item carousel__item__active";
            slides[newNextSlide].className = "carousel__item carousel__item__next";
        }
    }
}

