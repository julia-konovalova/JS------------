"use strict";

const products = [{
    id: 1, title: 'Notebook', image: "./images/product-item_notebook.jpg", price: 20000
}

    ,
{
    id: 2, title: 'Mouse', price: 1500
}

    ,
{
    id: 3, title: 'Keyboard', price: 5000
}

    ,
{
    id: 4, title: 'Gamepad', price: 4500
}

    ,
];

//Добавила разметку для изображения товара
const renderProduct = (item) => {
    const { title: item_title, image: item_image = "./images/product-item_image-default.jpg", price: item_price } = item;

    return `<div class="product-item">
    <h3>${item_title}
    </h3>
    <img class="product-item_image"src="${item_image}"alt="">
    <p>${item_price}
    </p>
    <button class="buy-btn">Добавить в корзину</button></div>`;
}

    ;

const renderProducts = (list = []) => {

    document.querySelector('.products').insertAdjacentHTML("beforeend", list.map((item) => renderProduct(item)).join(''));
}

    ;


renderProducts(products);