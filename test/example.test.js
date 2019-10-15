// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { ProductArray } from '../src/ProductArray.js';
import { storeArray } from '../src/api.js';

const test = QUnit.test;

test('should return a random object', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const products = new ProductArray(storeArray);
    const expected = typeof Object();
    //Act 
    // Call the function you're testing and set the result to a const
    
    const result = typeof products.getRandomProduct();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('should return 3 unique random objects', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const products = new ProductArray(storeArray);
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const threeObjs = products.getThreeProducts()
    const result = (threeObjs[0].id !== threeObjs[1].id && threeObjs[0].id !== threeObjs[2].id && threeObjs[1].id !== threeObjs[2].id);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});