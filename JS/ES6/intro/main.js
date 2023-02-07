"use strict";
//European Computer Manufacurers Association
//AKA ES 2015 JAVASCRIPT 6
//BACKWORD COMPATIBLE
//Linting tools: staticko testiranje

//umesto var ubacujemo let i const

//let je blok scoped var je function scoped

function test() {
  // var a = 10;
  let a = 10;
}

test();

var arr = [1, 2, 3, 1, 1];

// for (var i = 0; i < arr.length; i++) {
for (let i = 0; i < arr.length; i++) {
  // var curEl = arr[i];
  let curEl = arr[i];
  // console.log(curEl);
}

// console.log(a);
// console.log(curEl);
// console.log(i);

//Scope chian i dalje vazi

// const x = 50;
// x = 23;
//let nema hoistinga

// const arrC = [1, 2, 1, 1, 1];
// arrC.push(5);
// arrC = [1, 2, 1, 1, 1];

// default parametars
function sum(a = 15, b = 5) {
  return a + b;
}

console.log(sum());

//object literal
const firstName = "Stefan";
const id = 33;

const user = {
  firstName,
  id,
  sayHello() {
    console.log("Hi");
  },
};
console.log(user);
user.sayHello();

var x = "Stefan ".repeat(4);

console.log(x);
