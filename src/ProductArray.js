export class ProductArray {
    constructor(productArray) {
        this.products = productArray.slice();
        this.previousSetOfProducts = '';
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
        return randomProduct;
    }

    findById(id, arrayToSearch) {
        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i].id === id) {
                return arrayToSearch[i];
            }
        }
        return null;
    };

    getThreeProducts() {
        let obj1 = this.getRandomProduct();
        let obj2 = this.getRandomProduct();
        let obj3 = this.getRandomProduct();
        let randomProductArray = [obj1, obj2, obj3];
        //Check to see if any products were in the previous set
        randomProductArray.forEach(element => {
            if (this.findById(element.id, this.previousSetOfProducts)) {
                this.getThreeProducts();
            }
        });
        //Check to make sure products are unique
        while (obj1.id === obj2.id || obj1.id === obj3.id || obj2.id === obj3.id) {
            this.getThreeProducts();
        }
        return randomProductArray;
    }

}   