import { renderTableRow } from './utils.js';

export class ProductArray {
    constructor(productArray) {
        this.products = productArray.slice();
        this.previousSetOfProducts = '';
        this.currentSetOfProducts = '';
    }

    intializeProductScores() {
        this.products.forEach(product => {
            product.productPickedScore = 0;
            product.productShownScore = 0;
        });
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

    isNotUnique(obj1, obj2, obj3) {
        if (obj1.id === obj2.id || obj1.id === obj3.id || obj2.id === obj3.id) {
            return true;
        } else {
            return false;
        }
    }

    wasInLastSet(currentArray, previousArray) {
        currentArray.forEach(element => {
            if (this.findById(element, previousArray)){
                return true;
            } else {
                return false;
            }
        });
    }

    getThreeProducts() {
        let obj1 = this.getRandomProduct();
        let obj2 = this.getRandomProduct();
        let obj3 = this.getRandomProduct();
        let randomProductArray = [obj1, obj2, obj3];
        if (!this.wasInLastSet(randomProductArray, this.previousSetOfProducts) && !this.isNotUnique(obj1, obj2, obj3)) {
            this.currentSetOfProducts = randomProductArray;
            return randomProductArray;
        }

        //Check to see if any products were in the previous set
        if (this.wasInLastSet(randomProductArray, this.previousSetOfProducts)) {
            randomProductArray = this.getThreeProducts();
        }
        //Check to make sure products are unique
        if (this.isNotUnique(obj1, obj2, obj3)){
            randomProductArray = this.getThreeProducts();
        }
        this.currentSetOfProducts = randomProductArray;
        return randomProductArray;
    }

    setPreviousSet(previousSetArray) {
        this.previousSetOfProducts = previousSetArray;
    }

    renderSet() {
        const imageArea1 = document.getElementById('img-1');
        const imageValue1 = document.getElementById('imgVal1');
        const imageArea2 = document.getElementById('img-2');
        const imageValue2 = document.getElementById('imgVal2');
        const imageArea3 = document.getElementById('img-3');
        const imageValue3 = document.getElementById('imgVal3');

        imageArea1.src = this.currentSetOfProducts[0].image;
        imageValue1.value = this.currentSetOfProducts[0].id;
        imageArea2.src = this.currentSetOfProducts[1].image;
        imageValue2.value = this.currentSetOfProducts[1].id;
        imageArea3.src = this.currentSetOfProducts[2].image;
        imageValue3.value = this.currentSetOfProducts[2].id;
        imageValue1.checked = false;
        imageValue2.checked = false;
        imageValue3.checked = false;
    }
    displayResults() {
        let toHide = document.querySelectorAll('img');
        toHide.forEach(el => {
            el.classList.add('hidden');
        });

        const toShow = document.getElementById('result-area');
        toShow.classList.remove('hidden');
        toShow.classList.add('visible');
        this.products.forEach(el => {
            renderTableRow(el);
        });
    }
}   