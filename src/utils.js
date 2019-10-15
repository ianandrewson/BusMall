import { storeArray } from './api.js';

export const getRandomImage = () => {
    return storeArray[Math.floor(Math.random() * storeArray.length)];
};