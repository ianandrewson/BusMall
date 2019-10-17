import { storeArray } from './api.js';
import { ProductArray } from './ProductArray.js';

export const getRandomImage = () => {
    return storeArray[Math.floor(Math.random() * storeArray.length)];
};

export const renderTableRow = (productObject) => {
    const newTableRow = document.createElement('tr');
    const tableToAppendTo = document.getElementById('result-table');

    const productName = document.createElement('td');
    productName.textContent = productObject.name;
    newTableRow.appendChild(productName);

    const timesShown = document.createElement('td');
    timesShown.textContent = productObject.productShownScore;
    newTableRow.appendChild(timesShown);

    const timesPicked = document.createElement('td');
    timesPicked.textContent = productObject.productPickedScore;
    newTableRow.appendChild(timesPicked);

    tableToAppendTo.appendChild(newTableRow);
};

export const intializeSurvey = () => {
    let busMallStore = new ProductArray(storeArray);
    busMallStore.intializeProductScores();

    busMallStore.getThreeProducts();
    busMallStore.renderSet();
};

export const findById = (id, arrayToSearch) => {
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i].id === id) {
            return arrayToSearch[i];
        }
    }
    return null;
};