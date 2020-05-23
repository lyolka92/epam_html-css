

const projectsCarouselNode = document.querySelector("#projects .carousel");
const projectsCarousel = new Carousel(projectsCarouselNode);
projectsCarousel.init();

const subscribeForm = document.querySelector("#subscribe_form");
subscribeForm.addEventListener("submit", event => {
    const popupHeader = "Поздравляем!",
        popupText = "Теперь Вы подписаны на нашу восхитительную рассылку! Ожидайте новостей в ближайшее время.",
        subscribePopup = new Popup(popupHeader, popupText);
    subscribePopup.show();
    event.preventDefault();
});