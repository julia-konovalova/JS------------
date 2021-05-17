
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/150',
        searchLine: '',
        filtered: [],
        showProducts: true,
        isVisibleCart: false,
        noGoods: 'Нет данных',
        cartList: []

    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            this.cartList.push(product.id_product);
            this.isVisibleCart = true;
        },
        removeProduct() {
            this.cartList.splice(this.id_product);
        },
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(el => {
                if (!this.filtered.includes(el)) {
                    !showProducts;
                }
            })
        },
        showCart() {
            this.isVisibleCart = !this.isVisibleCart
        }

    },
    beforeCreate() { },
    created() {
        this.getJson(`${API + this.catalogUrl} `)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);

                }
            });
    },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeDestroy() { },
    destroyed() { },
});