import { ProductArray } from './src/ProductArray.js';
import { storeArray } from './src/api.js';

const busMallStore = new ProductArray(storeArray);
busMallStore.getThreeProducts();
busMallStore.renderSet();
