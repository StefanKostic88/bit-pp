"use strict";

/*
// 1. Write a function to check whether the `input` is a string or not.

function checkIsString(input) {
  console.log();
  if (typeof input !== "string") return false;
  return true;
}

var a = checkIsString(1);
var b = checkIsString("String is string");
console.log("Invalid", a, "\nValid", b);
*/

/*

// 2. Write a function to check whether a string is blank or not.

function checkIfBlank(input) {
  if (typeof input !== "string") return false;
  if (input.trim().length > 0) return false;
  return true;
}

var a = checkIfBlank("   ");
console.log(a);
*/

/*

// 3. Write a function that concatenates a given string n times (default is 1).
// &quot;Ha&quot; -&gt; &quot;Ha&quot;
// &quot;Ha&quot;, 3 -&gt; &quot;HaHaHa&quot;

var concatString = function (string, rep = 1) {
  if (typeof string !== "string") return "invalid input";
  var result = "";
  for (var i = 0; i < rep; i++) {
    result += string;
  }
  return result;
};

var x = concatString("Ha", 5);
console.log(x);


*/

/*
// 4. Write a function to count the number of letter occurrences in a string.
// &quot;My random string&quot;, &quot;n&quot; -&gt; 2

function letterOcc(string, letter) {
  if (typeof string !== "string" || typeof letter !== "string") {
    return "Invalid Input";
  }
  var letters = string.split("");
  var occ = 0;

  for (var i = 0; i < letters.length; i++) {
    if (letters[i].toLowerCase() === letter.toLowerCase()) {
      occ += 1;
    }
  }
  return occ;
}

var x = letterOcc("My random string", "n");
console.log(x);
*/
/*
// 5. Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.

function findIndexOfOcc(string, letter) {
  var letters = string.split("");
  var index = 0;
  for (var i = 1; i < letters.length; i++) {
    if (letters[i].toLowerCase() === letter.toLowerCase()) {
      index = i;
      break;
    }
  }

  return index === 0 ? -1 : index;
}

var x = findIndexOfOcc("My random string", "n");
console.log(x);
var a = findIndexOfOcc("Mmra", "t");
console.log(a);
*/

/*
// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

function findIndexOfLastOcc(string, letter) {
  var letters = string.split("");
  var lastIndex = 0;
  for (var i = 1; i < letters.length; i++) {
    if (letters[i].toLowerCase() === letter.toLowerCase()) {
      lastIndex = i;
    }
  }

  return lastIndex === 0 ? -1 : lastIndex;
}

var x = findIndexOfLastOcc("My random string", "n");
console.log(x);
var a = findIndexOfLastOcc("Mmra", "t");
console.log(a);
*/

/*
// 7. Write a function to convert string into an array. Space in a string should be represented as
// “null” in new array.

function convertToArr(string) {
  var stringLength = string.length;
  var arr = [];
  for (var i = 0; i < stringLength; i++) {
    var el = string[i] === " " ? null : string[i];
    arr.push(el);
  }
  return arr;
}

var myRan = convertToArr("My random string");
console.log(myRan);
var ran = convertToArr("random");
console.log(ran);
*/

/*
// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function checkIfPrime(num) {
  if (num <= 0 || num === 1) return "number is not prime";
  var factor = 0;
  for (var i = 0; i <= num * num; i++) {
    if (num % i === 0) {
      factor += 1;
    }
  }
  return factor === 2 ? "Number is Prime" : "Number is Not A Prime";
}

var x = checkIfPrime(2);
console.log(x);
*/

/*

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.

function rep(string, symbol) {
  var length = string.length;
  var newString = "";
  for (var i = 0; i < length; i++) {
    var el = string[i] === " " ? symbol : string[i];
    newString += el;
  }
  return newString;
}

var x = rep("My Random String", "+");
var a = rep("My Random String", "-");
console.log(x);
console.log(a);


*/

/*
// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function addLetter(string) {
  console.log(string[0]);
  // var newString = string + string[0];
  var newString = string;
  for (var i = 0, j = string.length - 1; i < string.length; i++, j--) {
    newString += string[j];
  }
  return newString;
}

var x = addLetter("HaHa");
console.log(x);

*/

/*
// 11. Write a function that converts an array of strings into an array of numbers. Filter out all
// non-numeric values.

var arr = ["1", "21", undefined, "42", "1e+3", Infinity];

function filterAndConvert(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var convertedEl = +arr[i];

    if (isFinite(convertedEl)) {
      newArr.push(convertedEl);
    }
  }
  return newArr;
}

var x = filterAndConvert(arr);
console.log(x);
*/

/*
// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function isNotValidFun(sex, age) {
  if ((sex === "male" && age >= 65) || (sex === "female" && age >= 60))
    return false;
}

function checkRetirement(sex, age) {
  var convertToLowerCase = sex.toLowerCase();
  var isNotValid = isNotValidFun(convertToLowerCase, age);
  if (!isNotValid) return "Already retired";
  return convertToLowerCase === "female" ? 60 - age : 65 - age;
}

var x = checkRetirement("Male", 50);
console.log(x);
*/

/*
// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeNum(num) {
  var numToString = "" + num;
  var length = numToString.length - 1;
  var lastDigit = +numToString[length];
  switch (lastDigit) {
    case 1:
      return (num += "st");
    case 2:
      return (num += "nd");
    case 3:
      return (num += "rd");
    default:
      return (num += "th");
  }
}

var x = humanizeNum(2);
console.log(x);
*/
