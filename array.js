const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];
console.log(clothing.length);

const array = [5, 12, 8, 130, 44];
let index = 2;
console.log(`${array.at(index)}`);
index = -2;
console.log(`${array.at(index)}`);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const array4 = array1.concat(array2,array3);
console.log(array4);

const array5 = ['a', 'b', 'c', 'd', 'e'];
console.log(array5.copyWithin(2))
console.log(array5.copyWithin(0, 3, 4));
console.log(array5.copyWithin(1, 3));

const a = ["a", "b", "c"];
for (const [index, element] of a.entries()) {
  console.log(index, element);
}

const isBelowThreshold = (currentValue) => currentValue < 40;
const array6= [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

console.log([1, 2, 3].fill(4)); 
console.log([1, 2, 3].fill(4, 1)); 
console.log([1, 2, 3].fill(4, 1, 2));

const array7 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array7.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 0 },
];
const result = inventory.find(({  quantity}) => quantity=== 0);
console.log(result);

const array8 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array8.findIndex(isLargeNumber));

const found = array8.findLast((element) => element > 45);
console.log(found);

const foundindex = array8.findLastIndex((element) => element > 45);
console.log(foundindex);

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));

const arr3 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr3.flatMap(num => num);
let are= flattened.flatMap(num=>num+4);
console.log(are);

const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;
arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});
console.log({ numCallbackRuns });

const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
  Array.from(mapper.values());
  Array.from(mapper.keys());

  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
  };
  console.log(Array.prototype.includes.call(arrayLike, 2));

  const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));

const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
console.log(elements.join('-'));

const array10 = ['a', 'b', 'c'];
const iterator = array10.keys();
for (const key of iterator) {
  console.log(key);
}

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));

