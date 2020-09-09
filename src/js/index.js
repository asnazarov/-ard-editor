import "../pages/style.css"
import Api from "./Api.js";
import Card from "./Card.js";
import CardList from "./CardList.js";
import Popup from "./Popup.js";
import FormValidator from './FormValidator.js';
import UserInfo from './UserInfo.js';
import CardInfo from './CardInfo.js';
(function() {
    const title = document.querySelector('div')
    const root = document.querySelector('.root');
    const userPopup = root.querySelector('#addUserPopup'); // попап юзера
    const cardPopup = root.querySelector('#addCardPopup') // попап карточки
    const buttonCard = root.querySelector('.user-info__button'); //open кнопка попап карточки
    const nameElement = root.querySelector('.user-info__name');
    const jobElement = root.querySelector('.user-info__job');
    // const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort11' : 'https://praktikum.tk/cohort11';
    const serverUrl = NODE_ENV === 'development' ? 'http://nomoreparties.co/cohort11' : 'https://nomoreparties.co/cohort11';
    const api = new Api({
        baseUrl: serverUrl,
        headers: {
            authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
            'Content-Type': 'application/json'
        },
    });
    console.log(api.getInitialCards())

    function openImagePopup(imageLink) {
        document.querySelector('.popup__image').src = imageLink;
        popupPicture.open();
    }
    const createCards = (...arg) => new Card(...arg, openImagePopup);
    const cardList = new CardList(root, '.places-list', createCards, api);
    const popupUser = new Popup(userPopup);

    function openPopupUser() { // попап юзера
        const nameInput = userPopup.querySelector('#name');
        const jobInput = userPopup.querySelector('#job');
        nameInput.value = nameElement.textContent; // в классе UserInfo в nameElement.textContent забираем данные с сервера
        jobInput.value = jobElement.textContent; // в классе UserInfo в jobElement.textContent забираем данные с сервера
        const formAddUser = root.querySelector('.form-addUser');
        formAddUser.querySelectorAll('.error').forEach((item) => item.textContent = ''); // сбрасываем ошибки
        popupUser.open(); // открываем попап
    };
    document.querySelector('.user-info__btnEdit').addEventListener('click', openPopupUser);

    const popupCard = new Popup(cardPopup, buttonCard); // попап добавления карточки
    const popupPicture = new Popup(root.querySelector('#imagePopup')); // попап картинки
    const formValidator = new FormValidator(root.querySelector('.form-addUser'));
    const cardValidator = new FormValidator(root.querySelector('.form-addCard'));
    formValidator.setEventListeners();
    cardValidator.setEventListeners();
    new UserInfo(root, '.form-addUser', nameElement, jobElement, popupUser, api);
    new CardInfo(root, '.form-addCard', '.popup__input_type_title', '.popup__input_type_link-url', cardList, popupCard, formValidator);
})();