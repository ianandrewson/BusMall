export class ProductArray {
    constructor(productArray) {
        this.products = productArray.slice();
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
        return randomProduct;
    }

    getThreeProducts() {
        let obj1 = this.getRandomProduct();
        let obj2 = this.getRandomProduct();
        let obj3 = this.getRandomProduct();
        while (obj1.id === obj2.id || obj1.id === obj3.id || obj2.id === obj3.id) {
            obj1 = this.getRandomProduct();
            obj2 = this.getRandomProduct();
        }
        return [obj1, obj2, obj3];
    }

}   