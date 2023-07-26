/**
 * Functions are a way to group code together and reuse it.
 */

// Function declaration
function sayHello() {
  console.log("Hello!");
}

// Function expression
const sayGoodbye = function () {
  console.log("Goodbye!");
};

// Arrow function expression
const sayHelloAgain = () => {
  console.log("Hello again!");
};

// Arrow function expression with implicit return
const sayGoodbyeAgain = () => console.log("Goodbye again!");

// Function invocation
sayHello(); // Hello!
sayGoodbye(); // Goodbye!
sayHelloAgain(); // Hello again!
sayGoodbyeAgain(); // Goodbye again!

// Function parameters
function sayHelloTo(name) {
  console.log(`Hello, ${name}!`);
}

sayHelloTo("John"); // Hello, John!
sayHelloTo("Jane"); // Hello, Jane!

// Function parameters with default values
function sayHelloToAgain(name = "World") {
  console.log(`Hello, ${name}!`);
}

sayHelloToAgain(); // Hello, World!
sayHelloToAgain("John"); // Hello, John!
sayHelloToAgain("Jane"); // Hello, Jane!

// Function parameters with default values and destructuring
function sayHelloToAgainAgain({ name = "World" }) {
  console.log(`Hello, ${name}!`);
}

sayHelloToAgainAgain({ name: "John" }); // Hello, John!
sayHelloToAgainAgain({ name: "Jane" }); // Hello, Jane!

// Function parameters with default values and destructuring and renaming
function sayHelloToAgainAgainAgain({ name: firstName = "World" }) {
  console.log(`Hello, ${firstName}!`);
}

sayHelloToAgainAgainAgain({ name: "John" }); // Hello, John!
sayHelloToAgainAgainAgain({ name: "Jane" }); // Hello, Jane!

// Function parameters with default values and destructuring and renaming and rest
function sayHelloToAgainAgainAgainAgain({
  name: firstName = "World",
  ...rest
}) {
  console.log(`Hello, ${firstName}!`);
  console.log(rest);
}

sayHelloToAgainAgainAgainAgain({ name: "John", age: 42 }); // Hello, John!
// { age: 42 }

// Function parameters with default values and destructuring and renaming and rest and default values
function sayHelloToAgainAgainAgainAgainAgain({
  name: firstName = "World",
  age = 0,
  ...rest
} = {}) {
  console.log(`Hello, ${firstName}!`);
  console.log(rest);
}

sayHelloToAgainAgainAgainAgainAgain({ name: "John", age: 42 }); // Hello, John!
// { age: 42 }
sayHelloToAgainAgainAgainAgainAgain(); // Hello, World!
// {}

// function immediately invoked
(function () {
  console.log("Hello!");
})(); // Hello!

// function immediately invoked with parameters
(function (name) {
  console.log(`Hello, ${name}!`);
})("John"); // Hello, John!

// function immediately invoked with parameters and destructuring
(function ({ name }) {
  console.log(`Hello, ${name}!`);
})({ name: "John" }); // Hello, John!

// function immediately invoked with parameters and destructuring and renaming
(function ({ name: firstName }) {
  console.log(`Hello, ${firstName}!`);
})({ name: "John" }); // Hello, John!
