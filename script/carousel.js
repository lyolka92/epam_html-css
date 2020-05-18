const projectsCarouselNode = document.querySelector("#projects .carousel"),
    projectsCarousel = new Carousel(projectsCarouselNode);

projectsCarousel.init();

function Carousel(carouselNode) {
    this.prevBtn = carouselNode.querySelector(".carousel__btn-prev");
    this.nextBtn = carouselNode.querySelector(".carousel__btn-next");
    this.slides = carouselNode.querySelectorAll(".carousel__item");
    this.activeSlideIndex = 0;
    this.isMoving = true;

    const initialSlideClass = "carousel__item__initial",
        prevSlideClass = "carousel__item__prev",
        activeSlideClass = "carousel__item__active",
        nextSlideClass = "carousel__item__next",
        that = this,
        slidesCount = that.slides.length;

    this.init = function() {
        setInitialCarouselClasses();
        setCarouselEventListeners();
        that.isMoving = false;
    }

    function setInitialCarouselClasses() {
        that.slides[slidesCount - 1].classList.add(prevSlideClass);
        that.slides[0].classList.add(activeSlideClass);
        that.slides[1].classList.add(nextSlideClass);
    }

    function setCarouselEventListeners() {
        that.prevBtn.addEventListener("click", movePrev);
        that.nextBtn.addEventListener("click", moveNext);
    }

    function movePrev() {
        if (that.isMoving) return;

        if (that.activeSlideIndex === 0) {
            that.activeSlideIndex = slidesCount - 1;
        } else {
            that.activeSlideIndex -= 1;
        }

        moveTo(that.activeSlideIndex);
    }

    function moveNext() {
        if (that.isMoving) return;

        if (that.activeSlideIndex === slidesCount - 1) {
            that.activeSlideIndex = 0;
        } else {
            that.activeSlideIndex += 1;
        }

        moveTo(that.activeSlideIndex);
    }

    function disableMoving() {
        that.isMoving = true;
        setTimeout(() => { that.isMoving = false }, 500);
    }

    function getNextIndex(currentSlideIndex) {
        let nextSlideIndex;

        if (currentSlideIndex === slidesCount - 1) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = currentSlideIndex + 1;
        }

        return nextSlideIndex;
    }

    function getPrevIndex(currentSlideIndex) {
        let prevSlideIndex;

        if (currentSlideIndex === 0) {
            prevSlideIndex = slidesCount - 1;
        } else {
            prevSlideIndex = currentSlideIndex - 1;
        }

        return prevSlideIndex;
    }

    function moveTo(currentSlideIndex) {
        disableMoving();

        const newNextSlideIndex = getNextIndex(currentSlideIndex);
        const newPrevSlideIndex = getPrevIndex(currentSlideIndex);

        if (slidesCount > 3) {
            const oldNextSlideIndex = getNextIndex(newNextSlideIndex);
            const oldPrevSlideIndex = getPrevIndex(newPrevSlideIndex);

            that.slides[oldPrevSlideIndex].classList.remove(prevSlideClass);
            that.slides[oldNextSlideIndex].classList.remove(nextSlideClass);
        }

        that.slides[newPrevSlideIndex].classList.remove(activeSlideClass, initialSlideClass);
        that.slides[newPrevSlideIndex].classList.add(prevSlideClass);
        that.slides[that.activeSlideIndex].classList.remove(prevSlideClass, nextSlideClass);
        that.slides[that.activeSlideIndex].classList.add(activeSlideClass);
        that.slides[newNextSlideIndex].classList.remove(activeSlideClass, initialSlideClass);
        that.slides[newNextSlideIndex].classList.add(nextSlideClass);
    }
}

