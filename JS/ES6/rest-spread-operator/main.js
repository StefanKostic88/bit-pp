"use strict";

//// spread

const arr = [22, 11, 55, 66];

const arr2 = [5, 4, 6, 8];

const newArr = [...arr, ...arr2, "new element"];

console.log(newArr);

//obavezno
//kopija niza se pravi shalow copy

const arrCopy = [...arr];

const user = {
  userName: "Stefan",
  surName: "Kostic",
  age: 45,
  id: 555,
};

const newObj = { ...user, street: "adress" };

newObj.surName = "AAA";

console.log(newObj);
console.log(user);

arr.push(...arr2);
// console.log(arr);

//rest

const [one, two, ...restElements] = arr;
console.log(one);
console.log(two);
console.log(restElements);

const { userName, ...restEl } = user;

console.log(restEl);

const getAllArg = function (...data) {
  console.log(data);
};

getAllArg("a", 25, 35, "Start");
