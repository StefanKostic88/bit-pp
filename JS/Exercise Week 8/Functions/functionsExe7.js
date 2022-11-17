"use strict";

/*

// 1. Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// ● takes 4 arguments: number of children, partner&#39;s name, geographic location, job title.
// ● outputs your fortune to the screen like so: &quot;You will be a X in Y, and married to Z with N
// kids.&quot;
// Call that function 3 times with 3 different values for the arguments.

// var tellFortune = function (...arr) {
//   return `You will be ${arr[3]} in ${arr[2]}, and married to ${arr[1]} with ${arr[0]}`;
// };

var tellFortune = function () {
  var string = "You will be a ";
  for (var i = arguments.length - 1; i >= 0; i--) {
    string += arguments[i];
    if (i === 3) string += "\nin ";
    if (i === 2) string += "\nand married to ";
    if (i === 1) string += "\nwith ";
  }
  return string + " kids";
};

var x = tellFortune(2, "Sarah", "Boston", "Super Hero");
var a = tellFortune(2, "Tom", "Paris", "Villan");
var t = tellFortune(3, "Joe", "London", "Fireman");
*/

/*
// 2. You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// ● takes 1 argument: your puppy&#39;s age.
// ● calculates your dog&#39;s age based on the conversion rate of 1 human year to 7 dog years.
// ● outputs the result to the screen like so: &quot;Your doggie is NN years old in dog years!&quot;
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog
// years.

var calculateDogAge = function (dogAge, converzionRate = 7) {
  var ageHuman = dogAge * converzionRate;
  return "Your doggie is " + ageHuman + " years old in dog years";
};
var x = calculateDogAge(2);
console.log(x);
*/

/*
// 3. Ever wonder how much a &quot;lifetime supply&quot; of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// ● takes 2 arguments: age, amount per day.
// ● calculates the amount consumed for rest of the life (based on a constant max age).
// ● outputs the result to the screen like so: &quot;You will need NN to last you until the ripe old age of
// X&quot;
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function (age, amount) {
  var maxAge = 80;
  var timeLeft = (maxAge - age) * 365.2421;
  var sypplies = Math.round(timeLeft * amount);
  return (
    "You will need " +
    sypplies +
    " to last you until the ripe old age of " +
    maxAge
  );
};

var x = calculateSupply(21, 4);

console.log(x);
*/

/*
// 4. It&#39;s hot out! Let&#39;s make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// ● Store a celsius temperature into a variable.
// ● Convert it to fahrenheit and output &quot;NN°C is NN°F&quot;.
// Create a function called fahrenheitToCelsius:
// ● Now store a fahrenheit temperature into a variable.
// ● Convert it to celsius and output &quot;NN°F is NN°C.&quot;

var fahrenheitToCelsius = function (deg) {
  var converted = deg * 1.8 + 32;
  return deg + " in deg C is " + converted + " in deg F";
};

var celsiusToFahrenheit = function (deg) {
  var converted = (deg - 32) / 1.8;
  return deg + " in deg F is " + converted + " in deg C";
};

var x = fahrenheitToCelsius(30);
console.log(x);

var t = celsiusToFahrenheit(86);
console.log(t);
*/
