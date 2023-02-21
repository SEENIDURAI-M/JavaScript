function sayHello() {
  console.log("Hello, world!");
}
sayHello(); // Output: "Hello, world!"(Function declaration)

const sayHello = function() {
  console.log("Hello, world!");
}
sayHello(); // Output: "Hello, world!"(Funtion expression)

const sayHello = () => {
  console.log("Hello, world!");
}
sayHello(); // Output: "Hello, world!"(Arrow funtion)

function withPrefix(prefix) {
  return function(text) {
    console.log(`${prefix} ${text}`);
  }
}
const logWithPrefix = withPrefix("LOG:");
logWithPrefix("Hello"); // Output: "LOG: Hello"(Higher-Order Function)

setTimeout(function() {
  console.log("Hello, world!");
}, 1000); // Output: "Hello, world!" (Anonymous Function)

(function() {
  console.log("Hello, world!");
})(); // Output: "Hello, world!"(Self-Invoking Function)

//A function that takes two numbers as arguments and returns their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3)); // Output: 5

//A function that takes an array of numbers and returns the average
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(calculateAverage([2, 4, 6])); // Output: 4

//A function that takes an object and returns a string with the object's properties and values
function objectToString(obj) {
  let str = "";
  for (let key in obj) {
    str += `${key}: ${obj[key]}, `;
  }
  return str.slice(0, -2);
}
console.log(objectToString({name: "John", age: 30, city: "New York"})); // Output: "name: John, age: 30, city: New York"

