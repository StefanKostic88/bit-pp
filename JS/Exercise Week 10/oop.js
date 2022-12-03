"use strict";

// {
// klasa treba da imda

// }

var student1 = {
  name: "Pera",
  lastNName: "Peric",
  age: 22,
  sayHello: function () {
    return "Hello";
  },
  newAge: function () {
    return this.age++;
  },
  x: ["1"],
};
var student = student1;
// var student2 = {
//   name: "Zivko",
//   lastNName: "Zivkovic",
//   age: 25,
//   sayHello: function () {
//     return "Hello";
//   },
//   newAge: function () {
//     return this.age++;
//   },
//   "abe-cb": "aaa",
// };

//agregacija - kombinacija nekoliko objekata
// console.log(student2["abe-cb"]);
console.log(student === student1);
