//Задание 3.Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
//a.  Имя содержит только буквы.
//b.  Телефон имеет вид +7(000)000-0000.
//c.  E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
//d.  Текст произвольный.
//e.  Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.


let formCheckOut = () => {
    let inputName = document.querySelector('.input-name');
    if (inputName.value != '/[a-zа-яё]+/i') {
        inputName.classList.add('error');
        inputName.insertAdjacentHTML('afterend', '<p class="error">Имя должно содержать только буквы</p>')
    };

    let inputPhone = document.querySelector('.input-phone');
    if (inputPhone.value != '/\+7\(\d{3}\)\d{3}-\d{4}/') {
        inputPhone.classList.add('error');
        inputPhone.insertAdjacentHTML('afterend', '<p class="error">Телефон должен быть в формате +7(000)000-0000</p>')
    };

    let inputMail = document.querySelector('.input-mail');
    if (inputMail.value != '/[\w._-]+@\w+\.[a-z]+/') {
        inputMail.classList.add('error');
        inputMail.insertAdjacentHTML('afterend', '<p class="error">E-mail должен быть в формате mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru</p>')
    };
};


document.querySelector('.form').addEventListener('submit', formCheckOut);
