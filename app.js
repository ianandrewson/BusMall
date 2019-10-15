import { ProductArray } from './src/ProductArray.js';
import { storeArray } from './src/api.js';

const busMallStore = new ProductArray(storeArray);
busMallStore.intializeProductScores();
busMallStore.getThreeProducts();
busMallStore.renderSet();


const imageParent = document.getElementById('image-area');
imageParent.addEventListener('change', e => {
    const targetValue = e.target.value;
    e.preventDefault();
    //store vote
    busMallStore.findById(targetValue, busMallStore.products).productPickedScore++;
    //increment display count
    busMallStore.currentSetOfProducts.forEach(product => {
        busMallStore.findById(product.id, busMallStore.products).productShownScore++;
    });
    console.log(busMallStore.findById(targetValue, busMallStore.products));
});
