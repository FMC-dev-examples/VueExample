export default {
    required: value => !!value || "Обязательное поле",
    counterMax: value =>  !value || value.length <= 20 || 'Максимум 20 символов',
    counterMaxBig: value => !value || value.length <= 40 || 'Максимум 40 символов',
    counterMin: value => !value || value.length >= 8 || 'Минимум 8 символов',
    counterMinSmall: value => !value || value.length >= 4 || 'Минимум 4 символов',
    email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || !value || 'Неправильно указана почта'
    },
    phone: value => {
        const pattern = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/
        return pattern.test(value) || !value || 'Неправильно указан номер телефону'
    }
};