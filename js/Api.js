class Api {
    constructor() {}
    getUserInfo() { // 1-е задание
        return fetch('https://praktikum.tk/cohort11/users/me', {
                method: "GET",
                headers: {
                    authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }

    getInitialCards() { //2е задание
        return fetch('https://praktikum.tk/cohort11/cards', {
                method: "GET",
                headers: {
                    authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }

    updateUserInfo(nameInput, jobInput) { //3е задание
            return fetch('https://praktikum.tk/cohort11/users/me', {
                    method: "PATCH",
                    headers: {
                        authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameInput,
                        about: jobInput
                    })
                })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        return Promise.reject(`Ошибка: ${res.status}`)
                    }
                })
        }
        // addApiCard(name, link) {            // 4е задание. Не сделано
        //     return fetch('https://praktikum.tk/cohort11/cards', {
        //             method: "POST",
        //             headers: {
        //                 authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
        //                 'Content-Type': 'application/json'
        //             },
        //             body: JSON.stringify({
        //                 name: name,
        //                 link: link
        //             })
        //         })
        //         .then(res => {
        //             if (res.ok) {
        //                 return res.json()
        //             }
        //             else {
        //                 return Promise.reject(`Ошибка: ${res.status}`)
        //             }
        //         })
        // }
    deleteCard(id) { //6е задание
        return fetch(`https://praktikum.tk/cohort11/cards/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: 'f19dbf25-1050-4e87-9f03-ebd68dde2c37',
                    'Content-Type': 'application/json'
                },
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`)
                }
            })
    }
}