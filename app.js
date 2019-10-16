import { ProductArray } from './src/ProductArray.js';
import { storeArray } from './src/api.js';

let busMallStore = new ProductArray(storeArray);
busMallStore.intializeProductScores();

busMallStore.getThreeProducts();
busMallStore.renderSet();

const imageParent = document.getElementById('image-area');
const resetButton = document.getElementById('reset');
imageParent.addEventListener('change', e => {
    const targetValue = e.target.value;
    e.preventDefault();
    //store vote
    busMallStore.findById(targetValue, busMallStore.products).productPickedScore++;
    //increment display count
    busMallStore.currentSetOfProducts.forEach(product => {
        busMallStore.findById(product.id, busMallStore.products).productShownScore++;
    });
    if (busMallStore.setCount < 25) {
        busMallStore.setCount++;
        busMallStore.getThreeProducts();
        busMallStore.renderSet();
    } else {
        busMallStore.displayResults();
    }
});

resetButton.addEventListener('click', () => {
    //store table data to LS (via busMallStore.products array)
    if (!localStorage.getItem('surveyResults')) {
        localStorage.setItem('surveyResults', '[]');
    }
    let resultsToStore = JSON.parse(localStorage.getItem('surveyResults'));
    resultsToStore.push(busMallStore.products);
    localStorage.setItem('surveyResults', JSON.stringify(resultsToStore));

    //clear result table
    document.getElementById('result-area').innerHTML = '<table><thead><tr><th colspan="3">Results</th></tr></thead><tbody id="result-table"><tr><td>Product</td><td>Times Shown</td><td>Times Picked</td></tr></tbody></table>';

    //hide result area
    document.getElementById('result-area').classList.remove('visible');
    document.getElementById('result-area').classList.add('hidden');

    busMallStore = new ProductArray(storeArray);
    busMallStore.intializeProductScores();
    busMallStore.getThreeProducts();
    busMallStore.renderSet();

    //unhide images
    let toShow = document.querySelectorAll('img');
    toShow.forEach(el => {
        el.classList.remove('hidden');
    });
});