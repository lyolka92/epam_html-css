function Popup(title, text) {
    this.popup = null;
    this.title = title;
    this.text = text;
}

function initPopupActions() {
    const header = document.getElementById("header");
    const main = document.getElementById("main");
    const footer = document.getElementById("footer");

    return {
        show: function() {
            this.popup = this.buildPopup();

            document.body.append(this.popup);

            this.popup.querySelector(".popup__overlay").addEventListener('click', () => this.close());
            this.popup.querySelector(".popup__close-btn").addEventListener('click', () => this.close());

            this.togglePageStyles();
        },

        buildPopup: function() {
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

            let newPopup = document.createElement("div");
            newPopup.className = "popup";
            newPopup.innerHTML = template;

            return newPopup;
        },

        togglePageStyles: function() {
            header.classList.toggle("blur");
            main.classList.toggle("blur");
            footer.classList.toggle("blur");

            document.body.classList.toggle("stop-scrolling");
        },

        close: function() {
            if (!this.popup) {
                return;
            }

            document.body.removeChild(this.popup);
            this.togglePageStyles();
        }
    }
}

Popup.prototype = initPopupActions();