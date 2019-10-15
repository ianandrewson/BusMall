export class ProductArray {
    constructor(productArray) {
        this.products = productArray.slice();
        this.previousSetOfProducts = '';
        this.currentSetOfProducts = '';
    }
    
    findById(id, arrayToSearch) {
        for (let i = 0; i < arrayToSearch.length; i++) {
            if (arrayToSearch[i].id === id) {
                return arrayToSearch[i];
            }
        }
        return null;
    }

    getRandomProduct() {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
        return randomProduct;
    }

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

        this.currentSetOfProducts = randomProductArray;
        return randomProductArray;
    }

    setPreviousSet(previousSetArray) {
        this.previousSetOfProducts = previousSetArray;
    }

    renderSet() {
        const imageArea1 = document.getElementById('img-1');
        const imageArea2 = document.getElementById('img-2');
        const imageArea3 = document.getElementById('img-3');

        imageArea1.src = this.currentSetOfProducts[0].image;
        imageArea2.src = this.currentSetOfProducts[1].image;
        imageArea3.src = this.currentSetOfProducts[2].image;
    }
}   