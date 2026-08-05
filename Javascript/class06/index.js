/**Yes, a variable declared with var in JavaScript can be completely reassigned. */

var snack = "Apple";
console.log(snack); // Outputs: Apple

// Reassignment
snack = "Banana"; 
console.log(snack); // Outputs: Banana




/***
 * In JavaScript, only variables declared with var can be redeclared within the same scope. Variables declared with let or const cannot be redeclared and will throw a SyntaxError
 */


var user = "Alice";
var user = "Bob"; // Completely valid

console.log(user); // Outputs: "Bob"



alert ()