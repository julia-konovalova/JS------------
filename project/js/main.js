"use strict";

const products = [{
    id: 1, title: 'Notebook', image: "./images/product-item_notebook.jpg", price: 20000
}

    ,
{
    id: 2, title: 'Mouse', image: "", price: 1500
}

    ,
{
    id: 3, title: 'Keyboard', image: "", price: 5000
}

    ,
{
    id: 4, title: 'Gamepad', price: 4500
}

    ,
];

//Добавила разметку для изображения товара
const renderProduct = (title, image, price) => {
    return `<div class="product-item">
    <h3>${title}
    </h3>
    <img class="product-item_image"src="${image}"alt="">
    <p>${price}
    </p>
    <button class="by-btn">Добавить в корзину</button></div>`;
}

    ;

const renderProducts = (list = []) => {

    // Для сокращения убрала фигурные скобки и слово return
    //  В качестве параметра по умолчанию в параметр стрелочной функции ниже
    // хочу вставить image = "./ images / product - item_image -default.jpg",
    // но не получается
    const productList = list.map((item) => renderProduct(item.title, item.image, item.price)
    );
    // Запятые убрали, выводя не весь массив разметки, а каждый элемент по очереди
    productList.forEach(function (item) {
        document.querySelector('.products').innerHTML += item;
    });
}

renderProducts(products);