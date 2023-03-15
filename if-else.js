let num = 10;

if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is non-positive");
}

//Checking if a number is odd or even
let num = 6;
if (num % 2 === 0) {
  console.log(num + " is even.");
} else {
  console.log(num + " is odd.");
}

//Checking if a number is positive, negative, or zero
let num = -5;
if (num > 0) {
  console.log(num + " is positive.");
} else if (num < 0) {
  console.log(num + " is negative.");
} else {
  console.log(num + " is zero.");
}

//Checking if a number is between two values
let num = 20;
if (num >= 10 && num <= 30) {
  console.log(num + " is between 10 and 30.");
} else {
  console.log(num + " is not between 10 and 30.");
}

//
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
