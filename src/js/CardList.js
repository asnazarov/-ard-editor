export default class CardList {
    // static template = document.querySelector('#cadr-template').content;

    constructor(root, container, createCards, api, preloader) {
        this.placesList = root.querySelector(container);
        this.createCards = createCards;
        this.api = api;
        this.preloader = preloader;
        console.log(this.preloader)
        this.render(root)
    }
    addCard = (cardTitleInput, cardUrlInput, likesLength, apiID) =>
        this.placesList.append(this.createCards(cardTitleInput, cardUrlInput, likesLength, apiID).create(this.placesList));

    render = () => {
        this.api.getInitialCards()
            .then(cards => {
                cards.forEach(item => this.addCard(item.name, item.link, item.likes.length, item._id));
                this.preloader.style.display = 'none'
            })

    }
}