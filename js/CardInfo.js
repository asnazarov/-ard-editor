class CardInfo {
    constructor(root, cardForm, inputTitle, inputLink, cardList, popupCard, formValidator) {
        this.cardList = cardList;
        this.popupCard = popupCard;
        this.formValidator = formValidator;
        this.cardForm = root.querySelector(cardForm);
        this.inputTitle = root.querySelector(inputTitle);;
        this.inputLink = root.querySelector(inputLink);;
        this.cardTitleInput = this.cardForm.querySelector('#title');
        this.cardUrlInput = this.cardForm.querySelector('#url');
        this.addHandler();
    }

    sendForm = (event) => {
        event.preventDefault();
        this.cardList.addCard(this.cardTitleInput.value, this.cardUrlInput.value);
        this.popupCard.close(); // закрываю попап
        this.formValidator.setSubmitButtonState(document.querySelector('#submitCard'), false);
        this.inputTitle.value = '';
        this.inputLink.value = '';
    }

    addHandler = () => this.cardForm.addEventListener('submit', this.sendForm); // слушатель формы карточки
}