// IMPORT MODULES under test here:
import { makeRPSThrow } from '../utils.js';

const test = QUnit.test;

test('if one is entered then the result will be rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRPSThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if 2 then paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRPSThrow(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if 3 then scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRPSThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

