"use strict";
/*
1. Write a function that capitalizes the first letter of each str argument it receives.
Function arguments: [&#39;hello&#39;, &#39;there&#39;, &#39;ES&#39;, 6]
Output: [&#39;Hello&#39;, &#39;There&#39;, &#39;ES&#39;]


const arr = ["hello", "there", "ES", 6];

const filteredValue = arr
  .filter((el) => typeof el === "string")
  .map((str) =>
    str
      .split("")
      .map((letter, index) => {
        if (index === 0) {
          return letter.toUpperCase();
        } else {
          return letter;
        }
      })
      .join("")
  );

console.log(filteredValue);
*/

/*
2. Write a function that calculates sale tax that should be paid for the product of the given price.
Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia).
Input: [{ name: “Banana”, price: 120 }, {name: “Orange”, price: 100}]
Output: [{ name: “Banana”, price: 144 }, { name: “Orange”, price: 120 }] // product full price
Output2: [ 24, 20 ] // tax only


const calcTax = (obj) => ({ ...obj, price: obj.price + obj.price * 0.2 });
const calcTax2 = ({ name, price }) => ({
  name: name,
  price: price + price * 0.2,
});

const taxFreePricesArr = [
  { name: "Banana", price: 120 },
  { name: "Orange", price: 100 },
];

const pricesArr = taxFreePricesArr.map((el) => calcTax(el));
const pricesArr2 = taxFreePricesArr.map((el) => calcTax2(el));
console.log(pricesArr);
console.log(pricesArr2);
*/

/*
3. Write a function that increases each element of the given array by the given value. If the value is
omitted, increase each element of the array by 1.
Input: [4, 6, 11, -9, 2.1], 2
Output: [6, 8, 13, -7, 4.1]


const arr = [4, 6, 11, -9, 2.1];

const newArr = arr.map((el) => el + 2);
console.log(newArr);
*/

/*
4. Write a function that filters all even elements of the array.
Input: [6, 11, 9, 0, 3]
Output: [6, 0]



const arr = [6, 11, 9, 0, 3];

const evenArr = arr.filter((el) => el % 2 === 0);

console.log(evenArr);
*/

/*
5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: [&#39;compiler&#39;, &#39;transpiler&#39;, &#39;babel.js&#39;, &#39;JS standard&#39;, &#39;linter&#39;]
Output: [&#39;babel.js, &#39;JS standard&#39;]


const arr = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
const newArr = arr.filter((el) => el.includes("js") || el.includes("JS"));
console.log(newArr);

*/
/*
6. Write a function that filters all integer numbers from the given array.
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
Output: [7, 8]


const arr = [1.6, 11.34, 9.23, 7, 3.11, 8];

const newArr = arr.filter((el) => `${el}`.trim().length === 1);
console.log(newArr);
*/

/*
7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, &#39;abc&#39;, 45, 28, 553
Output: [45, 553]


const arr = [23, 11.5, 9, "abc", 39, 45, 28, 553];

const filteredArr = arr.filter(
  (el) => `${el}`.includes("5") && !`${el}`.includes(".5")
);
console.log(filteredArr);
*/

/*
8.Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: [1, 2, 5]


const arr = [1.6, 11.34, 29.23, 7, 3.11, 18];

const newArr = arr.reduce((acc, el, index) => {
  el > 10 ? acc.push(index) : null;
  return acc;
}, []);
console.log(newArr);
*/

/*
9. a. Create an array of persons. A person should be an object with name and age properties.
Experiment with enhanced object literals.
b. Write a function that prints out the names of persons older than 25.
c. Write a function that check if there is a person older than 40.
d. Write a function that checks if all persons are older than 20.



const arr = [
  { firsName: "Stefan", age: 34 },
  { firsName: "Mica", age: 60 },
  { firsName: "Jelena", age: 35 },
  { firsName: "Marko", age: 46 },
  { firsName: "Stefan", age: 22 },
  { firsName: "Jovan", age: 18 },
  { firsName: "Jovan", age: 42 },
  { firsName: "Ivan", age: 50 },
];

const printOlderThan25 = function (arr) {
  return arr.filter((el) => el.age > 25).map((el) => el.firsName);
};
const chekIfAllAreOlder20 = function (arr) {
  return arr.every((el) => el.age > 20);
};
const chekIfanyOlder40 = function (arr) {
  return arr.some((el) => el.age > 40);
};

const olderThan25Arr = printOlderThan25(arr);
console.log(olderThan25Arr);
const isValid = chekIfAllAreOlder20(arr);
console.log(isValid);
const oneForty = chekIfanyOlder40(arr);
console.log(oneForty);

*/
/*
10 Write a function that checks if the given array is an array of positive integer values.
Input: [3, 11, 9, 5, 6]
Input: [3, -12, 4, 11]
Output: no
Output: yes


const arr = [3, 11, 9, 5, 6];
const arr2 = [3, -12, 4, 11];

const hasPosInt = (arr) => arr.every((el) => el > 0);

console.log(hasPosInt(arr));
console.log(hasPosInt(arr2));
*/

/*
11. Write a function that calculates the product of the elements of the array.
Input: [2, 8, 3]
Output: 48


const arr = [2, 8, 3];

const calcProd = (arr) => arr.reduce((acc, cur) => (acc *= cur));

console.log(calcProd(arr));
*/

/*
12. Write a function that calculates the maximum of the given array.
Input: [2, 7, 3, 8, 5.4]
Output: 8



const arr = [2, 7, 3, 8, 5.4];
const calcMax = (arr) =>
  arr.reduce((acc, cur) => {
    if (acc < cur) acc = cur;
    return acc;
  });

console.log(calcMax(arr));

*/
