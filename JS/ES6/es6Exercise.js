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
*/
