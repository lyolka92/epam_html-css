const subscribeForm = document.getElementById("subscribe_form");

subscribeForm.onsubmit = event => {
    let popupHeader = "Поздравляем!";
    let popupText = "Теперь Вы подписаны на нашу восхитительную рассылку! Ожидайте новостей в ближайшее время.";
    
    let subscribePopup = new Popup();
    subscribePopup.show(popupHeader, popupText);

    event.preventDefault();
}

function Popup() {
    const closeBtnId = "popup-close-btn";
    const overlayId = "popup-overlay";

    const template = [`<div class="popup__overlay" id=${overlayId}></div><div class="popup__container"><div class="popup__header"><h2 class="popup__header-text">`,
        '',
        `</h2><span class="popup__close-btn" id=${closeBtnId}></span></div><div class="popup__content"><p class="popup__content-text">`,
        '',
        '</p></div></div>'];

    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    let popup;

    function buildPopup(title, text) {
        template[1] = title;
        template[3] = text;

        popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML = template.join("");
    }
    
    this.show = (title, text) => {
        buildPopup(title, text);

        document.body.append(popup);

        document.getElementById(overlayId).addEventListener('click', event => {
            this.close();
        })
        document.getElementById(closeBtnId).addEventListener('click', event => {
            this.close();
        })

        header.classList.add("blur");
        main.classList.add("blur");
        footer.classList.add("blur");
        document.body.classList.add("stop-scrolling");
    };

    this.close = () => {
        if(popup) {
            document.body.removeChild(popup);

            header.classList.remove("blur");
            main.classList.remove("blur");
            footer.classList.remove("blur");
            document.body.classList.remove("stop-scrolling");
        }
    };
}