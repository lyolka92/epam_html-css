const subscribeForm = document.getElementById("subscribe_form");

subscribeForm.addEventListener("submit", event => {
    let popupHeader = "Поздравляем!";
    let popupText = "Теперь Вы подписаны на нашу восхитительную рассылку! Ожидайте новостей в ближайшее время.";

    let subscribePopup = new Popup();
    subscribePopup.show(popupHeader, popupText);

    event.preventDefault();
});

function Popup() {
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    let popup;

    function buildPopup(title, text) {
        const template = `
        <div class="popup__overlay"></div>
        <div class="popup__container">
            <div class="popup__header">
                <h2 class="popup__header-text">${title}</h2>
                <span class="popup__close-btn"></span>
            </div>
            <div class="popup__content">
                <p class="popup__content-text">${text}</p>
            </div>
        </div>`;

        popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = template;
    }

    function togglePageStyles() {
        header.classList.toggle("blur");
        main.classList.toggle("blur");
        footer.classList.toggle("blur");

        document.body.classList.toggle("stop-scrolling");
    }
    
    this.show = (title, text) => {
        buildPopup(title, text);
        document.body.append(popup);

        popup.querySelector(".popup__overlay").addEventListener('click', () => this.close());
        popup.querySelector(".popup__close-btn").addEventListener('click', () => this.close());

        togglePageStyles();
    };

    this.close = () => {
        if(popup) {
            document.body.removeChild(popup);
            togglePageStyles();
        }
    };
}