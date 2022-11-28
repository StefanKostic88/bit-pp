"use strict";
/*
// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.

var testInput = [4, 5, 11, 9];

(function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    var temp = arr[0];
    if (arr[0] === arr[i]) {
      el = arr[arr.length - 1];
    }
    if (arr[arr.length - 1] === arr[i]) {
      el = temp;
    }
    newArr[newArr.length] = el;
  }
  // console.log(newArr);
  return newArr;
})(testInput);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(function (a, b) {
  return a * b;
})(4, 5);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(function (string) {
  var newString = "";
  for (var i = 0; i < string.length; i++) {
    var el = string[i] === "m" || string[i] === "M" ? "*" : string[i];
    newString += el;
  }
  // console.log(newString);
  return newString;
})("prograMming");

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.

(function (string) {
  var mail = "";
  for (var i = 0; i < string.length; i++) {
    var el = string[i];
    if (string[i] === " ") {
      el = ".";
    }
    mail += el;
  }
  return mail + "@gmail.com";
  //   console.log(string);
})("Pera Peric");

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
(function (num) {
  var convertNumtoString = "" + num;
  var result = 0;
  for (
    var i = 0, j = convertNumtoString.length - 1;
    i < convertNumtoString.length;
    i++, j--
  ) {
    var octalMult = 8 * 1;
    if (j === 0) {
      octalMult = 1;
    }
    result += parseInt(convertNumtoString[i]) * octalMult;
  }
  console.log(result);
  return result;
})(34);
*/

/*
// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

var checkPass = function (pass, suc, err) {
  if (pass.length < 6) return err();
  for (var i = 0; i < pass.length; i++) {
    var el = parseInt(pass[i]);
    if (isFinite(el)) return suc();
  }
  return err();
};

var x = checkPass(
  "1aa",
  function () {
    return " Your password is cool!";
  },
  function () {
    return " Your password is invalid!";
  }
);
console.log(x);
*/
/*
// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.

var chekIfOdd = function (arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
};

var x = chekIfOdd([2, 8, 11, 4, 9, 3], function (num) {
  return num % 2 !== 0;
});

console.log(x);
*/
