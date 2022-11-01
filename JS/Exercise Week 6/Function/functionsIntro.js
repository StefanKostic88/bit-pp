"use strict";

var number = 22;

// if (number % 2 === 0) {
//   result = "Even";
// } else {
//   result = "Odd";
// }

/**
 *
 * @param {typeof 'number'} number
 * @returns {odd || even}
 */

function checkIfNumberIsOddOrEven(number) {
  if (!isFinite(number)) {
    return "Invalid Input";
  } //Guard Clause
  var result = "";
  if (number % 2 === 0) {
    result = "Even";
  } else {
    result = "Odd";
  }
  return result;
}

var r = checkIfNumberIsOddOrEven(number);
console.log("Var R", r);
var f = checkIfNumberIsOddOrEven(17);
console.log("Var F", f);
var notANumber = checkIfNumberIsOddOrEven("Cao");
console.log("Var notANumber", notANumber);

var sayHello = function () {
  console.log("Hello World");
};
sayHello();
//Ako funkcija ne returnuje nista, varijabla ce biti undefined

var newFun = checkIfNumberIsOddOrEven;
var d = newFun(18);
console.log("Var D", d);

function arg(arrOfNumbers) {
  // return arguments; //vraca sve argumente
  var result = 0;
  // for (var i = 0; i < arguments.length; i++) {
  //   result += arguments[i];
  // }

  var result = 0;
  for (var i = 0; i < arrOfNumbers.length; i++) {
    result += arrOfNumbers[i];
  }

  return result;
}

var o = arg([1, 2, 3, 4, 5]);
console.log(o);
