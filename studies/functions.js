/* FUNCTIONS
* The two phases of using functions are: 
* 1. Declaring the function (also called defining). Use keyword 'function'.
* 2. Calling the function (also called invoking, executing, applying). Reference
* the function name, or variable name that it's assigned to, and pass any 
* expected values. 
*/
function sum (numOne, numTwo) { // declaring function 
    console.log(numOne + numTwo); 
}
sum (3, 4); // calling function 
/* Function's arguments vs. arguments passed: 
* A function's parameters are the placeholders for the values that will be
* passed to the function. The actual inputs for the function are called
* arguments. When we call a function, we pass the function's arguments. */

/* Syntax for a NAMED function: 
* Functions can have a name, be assigned to a variable or constant, or be
* anonymous. 
* Example of named function: */
function sub5 (number) {
    console.log (number - 5); 
}
sub5 (25); // called function with name sub5 and argument 25, prints 20

/* Assigning a function to a variable: 
* When an anonymous function is assigned to a variable or a constant, its
* called a "Function expression". You can only call the function AFTER it's 
been assigned to a variable or constant. 
*/
const relabel = function(string) {
    return (string += " says hello!");
}
const returnedName = relabel("Alyssa");
console.log(returnedName); 

/* Specifying inputs and outputs: 
* It's optional for functions to take inputs and return outputs. Parameters
* are the placeholders for required inputs.They are listed in parentheses 
* in a function. These parameter names should be clear about what values
* should be passed in. 
* 
* Functions return a single output, by default they return
* 'undefined'. You can return a value by using the 'return' keyword followed
* by a value. 
*/ 

/* Scope: 
* The scope of a variable is based on the location of the variable declaration
* within the source code, and it defines the part of the program where a
* variable is accessible. 
* 
* 2 types of scope: 
* 1) Global scope -- anything outside of a function code block 
* 2) Local scope -- anything local to (within) a function's code block
* 
* Functions can access variables in their parent scope. But parent scope can't
* access variables in child scopes. 
*/
let b = 1; // declares b in global scope 
function defineB() { // b is accessible within scope of function 
    b = 3;
}
console.log(b); // prints 1
doSomething(); // function redefines b
console.log(b); // prints 3
/* Declarations within the local scope of a function are not available outside 
* of the function */
function doSomething() {
    var a = 1; 
    console.log(a);
}
/* console.log(a); throws reference error because a is not defined outside 
function and isn't accessible outside of function */

/* The same scope rules apply to parent functions and child functions in 
* nested functions: */
function parent() {
    let a = 1;
    function child() {
        a = 2;
    }
    child();
    console.log(a); // prints 2
}
parent(); 
// but parent scopes don't have access to declarations inside of children scope
/*function mom() {
    function baby() {
        var a = 1; 
    }
    baby(); 
    console.log(a); // throws reference error
 }
 mom(); */

/* Closures: 
* A function definition can reference variables in its parent scope. The 
* function forms a closure around the data in its scope. This means that 
* calling the function gives access to variables in its parent scope. */ 

function makeAdder(x) { /* makeAdder takes a single argument x, and returns a
new function.*/ 
  return function(y) { /* The returned fucntion takes a single argument y, and 
  returns the sum of x and y */
    return x + y;
  };
}
// These are the closures that create 2 new functions: 
var add5 = makeAdder(5); // function adds 5 to the argument, x = 5
var add10 = makeAdder(10); // function adds 10 to the argument, x = 10 

console.log(add5(2));  // prints 7
console.log(add10(2)); // prints 12 

