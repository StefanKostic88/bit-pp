"use strict";
/*
// 1. Write a program that calculates the maximum of two given numbers.

function calcMax(num1, num2) {
  if (!isFinite(num1) || !isFinite(num2)) return "Invalid input";
  if (num1 > num2) return num1;
  if (num1 < num2) return num2;
  if (num1 === num2) return "Numbers are equal";
}

var x = calcMax(15, 12);

console.log(x);
*/

/*
// 2. Write a program that checks if a given number is odd.

function checkNumIsOddEven(num) {
  if (!isFinite(num)) return "Invalid Input";
  var result = num % 2 === 0 ? "Even" : "Odd";
  return "The number is " + result;
}

var numIs = checkNumIsOddEven(1);
console.log(numIs);
*/

/*
// 3. Write a program that checks if a given number is a three digit long number.

function checkDigits(num) {
  if (!isFinite(num)) return "Invalid Input";
  var letters = ("" + num).split("");
  var length = letters.length;
  var numArr = [];
  for (let i = 0; i < length; i++) {
    if (parseInt(letters[i])) {
      numArr.push(letters[i]);
    }
  }
  var result = numArr.length === 3 ? "" : "not ";
  return "The number is " + result + "three digit number";
}

var x = checkDigits(23.4);
console.log(x);


*/

/*
// 4. Write a program that calculates an arithmetic mean of four numbers.

function arMean(...nums) {
  var sum = 0;
  var length = nums.length;
  for (let i = 0; i < length; i++) {
    console.log();
    sum += nums[i];
  }
  var result = sum / length;
  return `Arithmetic Mean is ` + result;
}

var x = arMean(5, 6, 5, 4);
console.log(x);

*/

/*
// 5. Write a program that draws a square of a given size. For example, if the size of
// square is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
function square(lenY, lenX) {
  var string = "";

  var lengthY = lenY - 1;
  var lengthX = lenX - 1;

  for (let i = 0; i < lenY; i++) {
    for (let j = 0; j < lenX; j++) {
      if (i !== 0 && i !== lengthY && j !== 0 && j !== lengthX) {
        string += " ";
      } else {
        string += "*";
      }
    }
    string += "\n";
  }
  return string;
}
var result = square(5, 10);
console.log(result);
*/
/*
// 6. Write a program that draws a horizontal chart representing three given values.
// For example, if values are 5, 3, and 7, the program should draw:

function printChart(line1, line2, line3) {
  var result = "";
  for (let i = 0; i < 3; i++) {
    if (i === 0) {
      result += printLine(line1);
    }
    if (i === 1) {
      result += printLine(line2);
    }
    if (i === 2) {
      result += printLine(line3);
    }
    if (i !== 2) result += "\n";
  }
  return result;
}

function printLine(numOfStars) {
  var stars = "";
  for (let j = 0; j < numOfStars; j++) {
    stars += "*";
  }
  return stars;
}

var x = printChart(12, 1, 9);
console.log(x);
*/

/*
// 7.Write a program that calculates a number of digits of a given number.

function numOfDiggits(num) {
  if (!isFinite(num)) return "Invalid input";
  var letters = ("" + num).split("");
  var length = letters.length;
  var numArr = [];
  for (let i = 0; i < length; i++) {
    if (parseInt(letters[i])) {
      numArr.push(letters[i]);
    }
  }
  var result = numArr.length;

  return "the number of digits is " + result;
}

var x = numOfDiggits(4111.22);

console.log(x);
*/

/*
// 8. Write a program that calculates a number of appearances of a given number in a
// given array.

var arr = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
function appear(arr, num) {
  console.log(arr, num);
  var numOfAppear = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      numOfAppear += 1;
    }
  }
  var string = numOfAppear > 1 ? " times" : " time";
  return (
    "Number of appearances of number " + num + " is " + numOfAppear + string
  );
}

var x = appear(arr, e);
console.log(x);
*/

/*
// 9.Write a program that calculates the sum of odd elements of a given array.

var arr = [1, 5, 6, 10, 12, 21];

function calcOddSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

var x = calcOddSum(arr);
console.log(x);
*/

/*
// 10. Write a program that calculates the number of appearances of a letter a in a
// given string. Modify the program so it calculates the number of both letters a and
// A.

var testString = "Aasdsasssasa";

function getLetter(string, letter) {
  var arr = string.split("");
  var letterToLower = letter.toLowerCase();
  var numOfApp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (string[i].toLowerCase() === letterToLower) {
      numOfApp += 1;
    }
  }
  return `Number of appearances of letter ` + letter + " is " + numOfApp;
}

var x = getLetter(testString, "A");
console.log(x);
*/

/*
// 11. Write a program that concatenates a given string given number of times. For
// example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function concatString(string, times) {
  var result = "";
  for (let i = 0; i < times; i++) {
    result += string;
  }
  return result;
}

var x = concatString("ABC", 6);
console.log(x);
*/
