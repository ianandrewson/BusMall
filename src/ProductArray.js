export class ProductArray {
    constructor(productArray) {
        this.products = productArray.slice();
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
        return randomProduct;
    }

    getThreeProducts() {
        return null;
    }

}   