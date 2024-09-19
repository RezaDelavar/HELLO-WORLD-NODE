/**
 * @fileoverview Simple Hello World application in Node.js.
 * @module app
 */

/**
 * Greets the user with a message.
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