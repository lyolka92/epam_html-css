const Popup = (function() {
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    function Popup(title, text) {
        this.popup = null;
        this.title = title;
        this.text = text;
    }

    Popup.prototype.show = function() {
        this.popup = this.buildPopup();

        document.body.append(this.popup);

        this.popup.querySelector(".popup__overlay").addEventListener('click', () => this.close());
        this.popup.querySelector(".popup__close-btn").addEventListener('click', () => this.close());

        this.togglePageStyles();
    };

    Popup.prototype.buildPopup = function() {
        const template = `
            <div class="popup__overlay"></div>
            <div class="popup__container">
                <div class="popup__header">
                    <h2 class="popup__header-text">${this.title}</h2>
                    <span class="popup__close-btn"></span>
                </div>
                <div class="popup__content">
                    <p class="popup__content-text">${this.text}</p>
                </div>
            </div>`;

        const newPopup = document.createElement("div");
        newPopup.className = "popup";
        newPopup.innerHTML = template;

        return newPopup;
    };

    Popup.prototype.togglePageStyles = function() {
        header.classList.toggle("blur");
        main.classList.toggle("blur");
        footer.classList.toggle("blur");

        document.body.classList.toggle("stop-scrolling");
    };

    Popup.prototype.close = function() {
        if (!this.popup) {
            return;
        }
        document.body.removeChild(this.popup);
        this.togglePageStyles();
    };

    return Popup;
})();