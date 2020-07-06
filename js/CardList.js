class CardList {
    constructor(root, container, createCards, api) {
        this.placesList = root.querySelector(container);
        this.createCards = createCards;
        this.api = api;
        this.render(root)
    }

    addCard = (cardTitleInput, cardUrlInput, likesLength, apiID) =>
        this.placesList.append(this.createCards(cardTitleInput, cardUrlInput, likesLength, apiID).create(this.placesList));

    render = () => {
        this.api.getInitialCards()
            .then(cards => { cards.forEach(item => this.addCard(item.name, item.link, item.likes.length, item._id)); })
    }
}