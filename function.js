function sayHello() {
  console.log("Hello, world!");
}
sayHello(); 

const sayHello = function() {
  console.log("Hello, world!");
}
sayHello(); 

const sayHello = () => {
  console.log("Hello, world!");
}
sayHello(); 

setTimeout(function() {
  console.log("Hello, world!");
}, 1000); 

(function() {
  console.log("Hello, world!");
})(); 

//A function that takes two numbers as arguments and returns their sum
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(2, 3)); 

//A function that takes an array of numbers and returns the average
function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
console.log(calculateAverage([2, 4, 6])); 
