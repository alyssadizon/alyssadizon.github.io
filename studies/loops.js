/* Explain while, for, and for-in loops
Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
Loop over an Array, forwards and backwards
Loop over an Object */

/* LOOPS 
* Loops are Javascript constructs that execute a code block as many times 
* as specified. They are useful for iterative over data collections, which 
* allows the program to operate on individual values in a collection, one
* at a time.
* 
* Each loop has a starting condition and stopping condition that says how long
* the loop should execute, and an increment, which says how much we should move
* in the collection per iteration of the loop. 
* 
* 1. While loop: 
* Code block will continue to execute while a condition is true, specified
* with the "while" keyword. Stopping condition is needed, otherwise
& the infinite loop will crash the computer.*/
// Backward counting down to 0 
var count = 10; 
while (count < 0) {
    console.log(count);
    count-- 
} // prints countdown from 10 to 0 
// Forward counting 
var count = -3;
while (count < 4) {
    console.log(count);
    count++
} // prints count up from -3 to 3
/* 2. For loop: 
* Useful for looping over arrays. All statements go inside a parentheses that's
* separated by semicolons. */

// Looping forward over an array:
var dogNames = ['Lucy', 'Bruno', 'Frank', 'Percy'];
var dogTitles = [];
for (var index = 0; index < dogNames.length; index++) { /* loops over each item 
in the array, from 0 position to last position */
    dogTitles.push(dogNames[index].concat(" the Dog"));
} // concats each dog name with a new string, and pushes into a new array
console.log (dogTitles); // prints array of new dog titles 

// Looping backward over an array: 
var alphaOrderRoster = ['Alyssa', 'Ben', 'Ethan', 'Jakob']; 
for (var index = alphaOrderRoster.length-1; index >= 0; index--) {/*loops over
each item in the in the array, from last position to 0 position*/
    console.log(alphaOrderRoster[index]); 
} // prints each item in the array, in backward order  

/* 3. For-in loop: 
* This loop pulls each key out of an objct, one at a time. This enables you to 
* use the key to get the value in an object. 
*/
var customer = {source: 'Google', subscription_id: 3, value: "2000"}; 
for (var key in customer) {
    console.log(key + " : " + (customer[key])); /* prints each key, followed
    by colon, then value in the object */
}