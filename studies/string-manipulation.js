/* STRING MANIPULATION 
* 
* 1. With operators
* Concatenation operator (+) takes two string values and returns another string
* that puts together the two operand strings. 
*/
var a = "Good";
var b = "Morning";
console.log(a + ' ' + b); // prints 'Good Morning'
// += is shorthand for concactenation 
var message = "Good";
message += " Morning"; 
console.log(message); // prints 'Good Morning'
/* 
* 2. With string methods
* Methods and properties help you work with strings. 
*/ 
// a) String length - length property returns the length of a string
var text = "Alyssa";
console.log(text.length); // prints 6
/* b) Convert string cases 
* toUpperCase = converts string to upper case; 
* toLowerCase = converts string to lower case; 
*/ 
var example = "Operation Spark"; 
var example2 = example.toUpperCase();
console.log(example2); // prints OPERATION SPARK 
console.log(example2.toLowerCase()); // prints operation spark 
// c) Concat method - concat() joins two or more strings; 
var text1 = "Thank";
var text2 = "You";
var text3 = text1.concat(" ", text2);
console.log(text3); // prints "Thank You"
/* d) Return character at specific index in string 
* charAt() method returns the character at specified index in (); */
var str = "Alyssa"; 
console.log(str.charAt(3)); // prints s
/* e) Convert string to an array
* split() method converts a string to an array, with the character in ()
as the separator that indicates what the string will be split at within the
array. "" separator returns array of single characters */
var alphabet = "a-b-c-d-e-f-g-h-i-j-k"; 
console.log(alphabet.split('-')); // prints array of individual letters 