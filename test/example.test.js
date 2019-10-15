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
