//Looping through an array and logging each element to the console.
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//Looping through an object and logging each key-value pair to the console.
const object = { a: 1, b: 2, c: 3 };
for (let key in object) {
  console.log(key + ': ' + object[key]);
}

//Looping through an array and adding up all the values.
const array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

//Looping through an array of objects and logging a specific property of each object to the console.
console.log(sum);
const array = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Bob', age: 40 }];
for (let i = 0; i < array.length; i++) {
  console.log(array[i].name);
}

//Looping through an array and filtering out certain elements based on a condition.
const array = [1, 2, 3, 4, 5];
const filteredArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    filteredArray.push(array[i]);
  }
}

//Looping through an array and finding the maximum value.
console.log(filteredArray);
const array = [1, 5, 3, 2, 4];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);

