/* CONTROL FLOW
* Control flow statements tell the computer how to behave based on 
* a set of conditional statements, which sets the flow of the application.
* All conditional statements evaluate to a boolean value. 
* 1. If -- if statements executes if a logical condition is true
* 2. Else-if -- else if statement executes if one logical condition is not
* true, and the next logical condition is true
* 3. Else -- else statement executes as the default if all prior logical 
* conditions are not true 
*/ 
var day = "cloudy";
if (day === "sunny") { // evaluates if logical condition is true
    console.log("Let's go outside!");
} else if (day === "rainy") { /* evaluates if first condition isn't true, 
    but this second condition is true */
    console.log("Bring an umbrella!");
} else {console.log("Look outside"); /* default behavior if above 2
    2 conditions aren't true */
} // prints Look outside
/*
* 4. Switch -- Evaluates an expression by matching an input expression 
* to a case label. If the match is found, the program executes the
* associated statement. A break statement ends the case, which teslls 
* the application to stop executing if the expression is true, and 
* prevents the next block of code from executing. Switch statements
* help you run one block of code for multiple cases. 
*/
var month = 'june'
switch (month) {
    case 'april': 
        console.log ("April showers bring May flowers.");
        break;
    case 'may': 
        console.log ("May the 4th be with you.");
        break; 
    case 'june': 
        console.log ("Summer is here!");
        break;
    default: 
        console.log ("Sorry you're out of season.");
} // prints Summer is here! 
