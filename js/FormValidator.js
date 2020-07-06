class FormValidator {
    constructor(form) {
        this.form = form;
        this.setSubmitButtonState(document.querySelector('#submitCard'), false);
    }

    setSubmitButtonState = (button, state) => {
        if (state === true) {
            button.classList.remove('popup__button_disabled');
            button.removeAttribute('disabled');
        } else {
            button.classList.add('popup__button_disabled');
            button.setAttribute('disabled', 'disabled');
        }
    }

    setEventListeners = () => {
        this.form.addEventListener('input', (event) => {
            const inputs = Array.from(event.currentTarget.querySelectorAll('input'));
            const button = this.form.querySelector('.popup__button');
            this.isFieldValid(event.target);
            if (inputs.every(this.checkInputValidity)) {
                this.setSubmitButtonState(button, true)
            } else {
                this.setSubmitButtonState(button, false)
            }
        })
    }

    isFieldValid = (input) => {
        const errorElement = this.form.querySelector(`#${input.id}-error`);
        this.checkInputValidity(input);
        errorElement.textContent = input.validationMessage;
    }

    checkInputValidity = (input) => {
        input.setCustomValidity('');
        if (input.validity.valueMissing) {
            input.setCustomValidity('Поле не заполнено');
            return false;
        }
        if (input.validity.tooShort || input.validity.tooLong) {
            input.setCustomValidity('Должно быть от 2 до 30 символов');
            return false
        }
        return input.checkValidity();
    }

}