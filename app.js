import { ProductArray } from './src/ProductArray.js';
import { storeArray } from './src/api.js';

const busMallStore = new ProductArray(storeArray);
let setCount = 1;
const imageParent = document.getElementById('image-area');
const resetButton = document.getElementById('reset');
busMallStore.intializeProductScores();

busMallStore.getThreeProducts();
busMallStore.renderSet();

imageParent.addEventListener('change', e => {
    const targetValue = e.target.value;
    e.preventDefault();
    //store vote
    busMallStore.findById(targetValue, busMallStore.products).productPickedScore++;
    //increment display count
    busMallStore.currentSetOfProducts.forEach(product => {
        busMallStore.findById(product.id, busMallStore.products).productShownScore++;
    });
    if (setCount < 25) {
        setCount++;
        busMallStore.getThreeProducts();
        busMallStore.renderSet();
    } else {
        busMallStore.displayResults();
    }
});
