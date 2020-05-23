const Carousel = (function() {
    const prevBtnClass = ".carousel__btn-prev";
    const nextBtnClass = ".carousel__btn-next";
    const carouselItemClass = ".carousel__item";
    const initialSlideClass = "carousel__item__initial";
    const prevSlideClass = "carousel__item__prev";
    const activeSlideClass = "carousel__item__active";
    const nextSlideClass = "carousel__item__next";

    function Carousel(carouselNode) {
        this.prevBtn = carouselNode.querySelector(prevBtnClass);
        this.nextBtn = carouselNode.querySelector(nextBtnClass);
        this.slides = carouselNode.querySelectorAll(carouselItemClass);
        this.slidesCount = this.slides.length;
        this.activeSlideIndex = 0;
        this.isMoving = true;
    }

    Carousel.prototype.init = function () {
        this.setInitialCarouselClasses();
        this.setCarouselEventListeners();
        this.isMoving = false;
    };

    Carousel.prototype.setInitialCarouselClasses = function () {
        this.slides[this.slidesCount - 1].classList.add(prevSlideClass);
        this.slides[0].classList.add(activeSlideClass);
        this.slides[1].classList.add(nextSlideClass);
    };

    Carousel.prototype.setCarouselEventListeners = function () {
        const carousel = this;

        this.nextBtn.addEventListener("click", carousel.moveNext.bind(carousel));
        this.prevBtn.addEventListener("click", carousel.movePrev.bind(carousel));
    };

    Carousel.prototype.moveNext = function () {
        if (this.isMoving) return;

        if (this.activeSlideIndex === this.slidesCount - 1) {
            this.activeSlideIndex = 0;
        } else {
            this.activeSlideIndex += 1;
        }

        this.moveTo(this.activeSlideIndex);
    };

    Carousel.prototype.movePrev = function () {
        if (this.isMoving) return;

        if (this.activeSlideIndex === 0) {
            this.activeSlideIndex = this.slidesCount - 1;
        } else {
            this.activeSlideIndex -= 1;
        }

        this.moveTo(this.activeSlideIndex);
    };

    Carousel.prototype.moveTo = function (currentSlideIndex) {
        this.isMoving = true;
        setTimeout(() => {this.isMoving = false}, 500);

        const slidesCount = this.slidesCount;

        function getNextIndex(slideIndex) {
            let nextSlideIndex;
            if (slideIndex === slidesCount - 1) {
                nextSlideIndex = 0;
            } else {
                nextSlideIndex = slideIndex + 1;
            }
            return nextSlideIndex;
        }

        function getPrevIndex(slideIndex) {
            let prevSlideIndex;
            if (slideIndex === 0) {
                prevSlideIndex = slidesCount - 1;
            } else {
                prevSlideIndex = slideIndex - 1;
            }
            return prevSlideIndex;
        }

        const newNextSlideIndex = getNextIndex(currentSlideIndex);
        const newPrevSlideIndex = getPrevIndex(currentSlideIndex);

        if (this.slidesCount > 3) {
            const oldNextSlideIndex = getNextIndex(newNextSlideIndex),
                oldPrevSlideIndex = getPrevIndex(newPrevSlideIndex);

            this.slides[oldPrevSlideIndex].classList.remove(prevSlideClass);
            this.slides[oldNextSlideIndex].classList.remove(nextSlideClass);
        }

        this.slides[newPrevSlideIndex].classList.remove(activeSlideClass, initialSlideClass);
        this.slides[newPrevSlideIndex].classList.add(prevSlideClass);
        this.slides[this.activeSlideIndex].classList.remove(prevSlideClass, nextSlideClass);
        this.slides[this.activeSlideIndex].classList.add(activeSlideClass);
        this.slides[newNextSlideIndex].classList.remove(activeSlideClass, initialSlideClass);
        this.slides[newNextSlideIndex].classList.add(nextSlideClass);
    };

    return Carousel;
})();

