/*
 * DATATYPES:
 * 
 * Simple / Primitive Datatypes: 
 * 
 * Number: Numeric data*/
 var number = 3;
 console.log(number); // prints 3
/*
 * String: Character data */
 var string = "string";
 console.log(string); // prints "string"
/*
 * Boolean: true or false */
 var boolean = true;
 console.log(boolean); // prints true
/*
 * undefined: Undefined value */
 var x;
if (x === undefined) {console.log("undefined");
}
else {console.log("defined");
} // prints "undefined"
/* 
 * null: Absence of value (none) */
 // mystery is known to exist but it has no type or value:
    var mystery = null; 
    console.log(mystery); // prints "null"
/*
 * NaN: Global property that represents not a number
 * Complex Datatypes -- Don't have a fixed size. Their values are stored by reference to 
 * a memory address since variables only have 8 bytes of fixed memory.
 * 
 * Array: Can contain any number of elements, which are ordered in position by index 
 * Example definition:*/
 
 var arrayLiteral = [];

/* 
 * Object: Can contain any number of key/value pairs. 
 * Example definition: */
 
 var objectLiteral = {}; // 
 
 /*
 * Function: Can contain any number of statements
 
 * Infinity and -Infinity: Infinity is a global property that is a numeric value that represents 
 * infinity. Negative infinity is the negative value of the global object's infinity property.
 * 
 * Primitive data types don't hold values and operations on simple values don't alter the original value. 
 * They return new simple values. The values of primitive data types are copied from one variable to another. 
 * Complex data types contain infinite amount of data. Their values are copied by reference to the value
 * stored at a memory address. */
 
 // Primitive data types are copied by value: 
 var alyssa = 1;
 var coder = alyssa; // value stored in alyssa is copied into coder 
 coder = 'geoff'; // changed value for coder doesn't affect what's stored in alyssa 
 console.log(alyssa); // prints 1
 
 // Complex data types are copied by reference: 
 var alyssa = {color: 'green', city: 'new orleans'};
 var geoff = alyssa; /* value stored in geoff is a reference to value stored
 in alyssa - and they both reference the SAME object */
 geoff.color = 'orange';
 /* changing the value at geoff affects all references because the
 value at each reference points to the same object */
 console.log(alyssa.color); // prints orange
 