const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

const stringObj = new String('durai');
console.log(stringObj);
console.log(stringObj.valueOf());

const greeting = '   Hello world!   ';
console.log(greeting.trim());

console.log(greeting.trimEnd());

console.log(greeting.trimStart());

const stringObj1 = new String('seeni');
console.log(stringObj.toString());

const sentence1 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence1.toLowerCase());

console.log(sentence1.toUpperCase());

const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));

console.log(p.replaceAll('dog', 'monkey'));

const str = "hey JudE";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(str.search(re));
console.log(str.search(reDot));

const str1 = 'The quick brown fox jumps over the lazy dog.';
console.log(str1.slice(31));
console.log(str1.slice(4, 19));

const str2 = 'Mozilla';
console.log(str2.substring(1, 3));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

const str3 = '200';
console.log(str3.padEnd(4, '%'));

