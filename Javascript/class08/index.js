// /**Yes, a variable declared with var in JavaScript can be completely reassigned. */

// var snack = "Apple";
// console.log(snack); // Outputs: Apple

// // Reassignment
// snack = "Banana"; 
// console.log(snack); // Outputs: Banana




// /***
//  * In JavaScript, only variables declared with var can be redeclared within the same scope. Variables declared with let or const cannot be redeclared and will throw a SyntaxError
//  */


// var user = "Alice";
// var user = "Bob"; // Completely valid

// console.log(user); // Outputs: "Bob"



// alert ()

// console.log(true  <= 1); 

// true == 1

// false == 0


// 0 == false

// 1 === true


// console.log("1" == 1) 




// let name = [];

// console.log(typeof name); 


// var fruits = [
//     "Muhammad", //0
//     22, // 1
//     true, 
//     undefined,
//     null,
//     {},
//     function add() { },
//     []
// ]


   

// var returnValue = fruits.pop()
// console.log("Sec >>>",fruits)
// console.log("returnValue >>>",returnValue)

const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi'];

var result = fruits.slice(2)

console.log(result)