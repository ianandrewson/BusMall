import * as utils from '../src/utils.js';
import { generateShownChart } from '../src/chart.js';
import { generateClickedChart } from '../src/chart.js';

const longResults = JSON.parse(localStorage.getItem('surveyResults'));
let longScores = [];

longResults.forEach(surveySet => {
    surveySet.forEach(product => {
        if (!utils.findById(product.id, longScores)) {
            longScores.push({
                id: product.id,
                name: product.name,
                productShownScore: product.productShownScore,
                productPickedScore: product.productPickedScore
            });
        } else {
            utils.findById(product.id, longScores).productShownScore += product.productShownScore;
            utils.findById(product.id, longScores).productPickedScore += product.productPickedScore;
        }   
    });
});
longScores.forEach(el => {
    utils.renderTableRow(el);
});
generateShownChart(longScores);
generateClickedChart(longScores);