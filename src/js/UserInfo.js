export default class UserInfo {
    constructor(root, userForm, nameElement, jobElement, popupUser, api) {
        this.userForm = root.querySelector(userForm);
        this.nameElement = nameElement;
        this.jobElement = jobElement;
        this.popupUser = popupUser;
        this.api = api
        this.nameInput = this.userForm.querySelector('#name');
        this.jobInput = this.userForm.querySelector('#job');
        this.acceptUserInfo();
        this.addHandler();
    }
    acceptUserInfo = () => { // получаем с сервера name and about
        this.api.getUserInfo()
            .then(res => {
                this.nameElement.textContent = res.name;
                this.jobElement.textContent = res.about
            })
            .catch((err) => {
                console.log(err);
            });
    }

    sendForm = (event) => { // отправляем на сервер name and about
        event.preventDefault();
        this.api.updateUserInfo(this.nameInput.value, this.jobInput.value)
            .then(res => {
                this.nameElement.textContent = res.name;
                this.jobElement.textContent = res.about;
                this.popupUser.close();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    addHandler = () => this.userForm.addEventListener('submit', this.sendForm);
}