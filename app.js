/**
 * @fileoverview Simple Hello World application in Node.js this is test.
 ** @module app
 */

/**
 * Greets the user with a message.
 * this is reza test
 * @function greetUser
 * @param {string} [name='World'] - The name of the user to greet.
 * @returns {void}
 * @example
 * // Prints 'Hello, Alice!' to the console
 * greetUser('Alice');
 */
function greetUser(name = 'World') {
    console.log(`Hello, ${name}!`);
  }
  
  greetUser();
  /**
 * Adds two numbers and returns the sum.
 * @function addNumbers
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 * @example
 * // Returns 5
 * addNumbers(2, 3);
 */
  function addNumbers(a, b) {
    return a + b;
  }
  
  console.log(addNumbers(2, 3));