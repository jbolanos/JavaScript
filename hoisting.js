/**
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
 */

//- Example 1 - var declarations are hoisted to the top of their scope
console.log(x); // undefined
var x = 5;
console.log(x); // 5

//- Example 2 - let declarations are not hoisted
console.log(x); // ReferenceError: x is not defined
let x = 5;
console.log(x); // 5

//- Example 3 - const declarations are not hoisted
console.log(x); // ReferenceError: x is not defined
const x = 5;
console.log(x); // 5

//- Example 4 - function declarations are hoisted to the top of their scope
console.log(add(2, 3)); // 5
function add(x, y) {
  return x + y;
}
console.log(add(2, 3)); // 5

//- Example 5 - function expressions are not hoisted
console.log(add(2, 3)); // TypeError: add is not a function
var add = function (x, y) {
  return x + y;
};
console.log(add(2, 3)); // 5

//- Example 6 - class declarations are not hoisted
console.log(new Rectangle(5, 6)); // ReferenceError: Rectangle is not defined
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}
console.log(new Rectangle(5, 6)); // Rectangle { length: 5, width: 6 }

//- Example 7 - class expressions are not hoisted
console.log(new Rectangle(5, 6)); // ReferenceError: Rectangle is not defined
var Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
};
console.log(new Rectangle(5, 6)); // Rectangle { length: 5, width: 6 }
