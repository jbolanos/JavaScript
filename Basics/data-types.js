/** Primitives */

//- String
let str = "Hello World"; // double quotes
let str2 = "Hello World"; // single quotes

//- Number
let num = 123; // integer
let num2 = 123.45; // floating-point number

//- BigInt
let bigInt = 1234567890123456789012345678901234567890;

//- Boolean
let bool = true;
let bool2 = false;
bool == bool2; // returns false
bool == bool; // returns true

//- Undefined
let x; // undefined
let y = undefined; // undefined

//- Null
let z = null; // null

//- Symbol
let sym = Symbol("id"); // symbol

//- typeof
typeof "Hello World"; // returns "string"
typeof 123; // returns "number"
typeof 123.45; // returns "number"
typeof 1234567890123456789012345678901234567890; // returns "bigint"
typeof true; // returns "boolean"
typeof undefined; // returns "undefined"
typeof null; // returns "object"
typeof Symbol("id"); // returns "symbol"

/** Non-Primitives */

//- Object
let obj = {
  name: "John",
  age: 30,
  isMarried: false,
  children: ["Jane", "Mark", "Bob"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  sayHello: function () {
    return "Hello";
  },
};

//- Array
let arr = [1, 2, 3, 4, 5];

//- Function
function sayHello() {
  return "Hello";
}

//- typeof
typeof {}; // returns "object"
typeof []; // returns "object"
typeof function () {}; // returns "function"

/** Type Conversion */

//- String Conversion
String(123); // returns "123"
String(123.45); // returns "123.45"
String(true); // returns "true"
String(false); // returns "false"
String(undefined); // returns "undefined"
String(null); // returns "null"
String(Symbol("id")); // returns "Symbol(id)"
String({}); // returns "[object Object]"
String([]); // returns ""

//- Number Conversion
Number("123"); // returns 123
Number("123.45"); // returns 123.45
Number(true); // returns 1
Number(false); // returns 0
Number(undefined); // returns NaN
Number(null); // returns 0
Number(Symbol("id")); // returns NaN
Number({}); // returns NaN
Number([]); // returns 0

//- Boolean Conversion
Boolean("123"); // returns true
Boolean("123.45"); // returns true
Boolean(123); // returns true
Boolean(123.45); // returns true
Boolean(undefined); // returns false
Boolean(null); // returns false
Boolean(Symbol("id")); // returns true
Boolean({}); // returns true
Boolean([]); // returns true
