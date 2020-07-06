export default class Card {
    // static template = document.querySelector('#cadr-template').content;

    constructor(name, link, likes, api, openImageCallback) {
        this.template = document.querySelector('#cadr-template').content;
        this.name = name;
        this.link = link;
        this.likes = likes;
        this.api = api;
        this.openImageCallback = openImageCallback;
        this.remove = this.remove.bind(this);
    }

    like = (event) => event.target.classList.toggle('place-card__like-icon_liked');

    remove(event) {
        api.deleteCard(this.api)
        const card = event.target.closest('.place-card');
        card.parentNode.removeChild(card);
        this.view.querySelector('.place-card__like-icon').removeEventListener('click', this.like);
        this.view.querySelector('.place-card__delete-icon').removeEventListener('click', this.remove);
        this.view.querySelector('.place-card__image').removeEventListener('click', this.openImage);
    }

    create() {
        this.view = this.template.cloneNode(true).children[0];
        this.view.querySelector('.place-card__name').textContent = this.name;
        this.view.querySelector('.place-card__image').style.backgroundImage = `url(${this.link})`;
        this.view.querySelector('.place-card__like-number').textContent = this.likes;
        this.view.querySelector('.place-card__like-icon').addEventListener('click', this.like);
        this.view.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
        this.view.querySelector('.place-card__image').addEventListener('click', this.openImage);
        return this.view;
    }
    openImage = () => this.openImageCallback(this.link); //вызов переданного колбэка и передача в него изображения
}