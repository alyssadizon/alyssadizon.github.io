/* OPERATORS
* 
* Operators take action on operands.
* 
* Types of Operators: 
* 1. Assignment operators: Assign a variable to data. 
*/
    var x = 3; 
/*
* 2. Arithmetic operators: Performs a math operation. 
* Examples: */
    console.log(1 + 9);
    console.log(9 - 4);
    console.log(3 * 3);
    console.log(9 / 3);
    console.log(9 % 2); // prints 1 from modulo, returns remainder of division
    console.log(x++); // unary ++ adds 1
    console.log(x--); // unary -- subtracts 1
    console.log(-x); // flips positive or negative value of a number 
/*
* 3. Comparison operators: Compare two operands and evaluate to a Boolean
*/
    console.log(3 < 4); // Is 3 less than 4? (prints true)
    console.log(1 + 1 / 3 > 2); // Is 1 1/3 greater than 2? (prints false)
    console.log(1 <= 2); // Is 1 less than or equal to 2? (prints true)
    console.log(1 >= 2); // Is 1 greater than or equal to 2? (prints false)
    console.log(5 === 5); // Is 5 strictly equal to 5? (prints true)
    console.log("3" == 3); // Is "3" loosely equal to 3? (prints true)
    console.log(7 !== 7); // Does 7 not strictly equal 7? (prints false)
    console.log("4" != 4); // Does 4 not loosely equal 4?  (prints false)
/*
* 4. Logical operators
* && = AND operator, resolves to true when both conditions are true */
console.log (1 < 3 && 1 > 0); // prints false
/*
* || = OR operator, resolves to true when one condition is true */
console.log (2 < 5 || 1 > 0); // prints true
/*
* 5. Unary operators (!, typeOf, -)
* Unary Operators require one operand either before or after the operator. 
*/
// typeof operator returns data type in string format
console.log(typeof 8); // prints "number"
console.log(typeof "yarn"); // prints "string"
console.log(typeof (1 < 2)); // prints "boolean"
/* ! bang operator negates truthiness value and is used for checking if 
a variable has a truthy value*/
var isHotOutside = false;
if (!isHotOutside) {
    console.log("It's nice out");
} // prints "it's nice out"

/* 6. Ternary operator (a?b:c)
* Ternary Operator - Requires three operands and is a conditional operator. Can
replace several IF statements. ? means IF. : means ELSE. 
*/ 
var sunshine = true; // condition 
console.log(sunshine ? "It's daytime" : "It's nighttime"); // prints It's daytime
