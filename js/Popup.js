class Popup {
    constructor(container, button) {
        this.container = container;
        this.button = button;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.container.querySelector('.popup__close').addEventListener('click', this.close);
        if (this.button) this.button.addEventListener('click', this.open);
    }
    close = () => this.container.classList.remove('popup_is-opened');
    open = () => this.container.classList.add('popup_is-opened');

}