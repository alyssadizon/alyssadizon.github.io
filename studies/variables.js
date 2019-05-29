/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables.  Variables are named identifiers that can point to values of a 
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type. Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name 
 * (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we 
 * have NOT initialized it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

/* NOTE: We can assign and re-assign anything to a variable - we cannot do 
this with constants */
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
/* 
* We can also declare and initialize variables with keywords var, let, const. 
* 
* var: 
* IS: reassignable, hoisted, scoped to functions
* IS NOT: scoped to if blocks, scoped to loop blocks
*/
var dog = "bulldog";
dog = "pomeranian"; 
console.log(dog); // prints "pomeranian"
/*
* let: 
* IS: reassignable, scoped to functions, scoped to if blocks, scoped to loop blocks
* IS NOT: hoisted
*/
let cat = "tabby"; 
cat = "siamese";
console.log(cat); // prints "siamese" 
/*
* 
* const: 
* IS: scoped to functions, scoped to if blocks, scoped to loop blocks
* IS NOT: reassignable, hoisted 
*/
/* for example: 
/ const color = "yellow";
// color = "green"; // throws an error
/* 
* Hoisting: At runtime, before the statements of a program are executed, var 
* and function hoist the variable declaration (but not initialization) to the 
* top of the program. 
* 
* This means that we can invoke testing before it is 
* declared in the source code. Function declaration hoists the content, 
* but variable declaration hoists only the varaiable name. 
* 
* For example:*/
testing(); // the hoist!
function testing() {
    console.log('hoisting is happening');
} // prints "hoisting is happening"
/* 
* Declarations made with let will not hoist. As such, they aren't known in the
* block until the declaration statement.*/
/* { console.log(testing); // throws ReferenceError because testing is not defined
    let testing = 40;
} */

