"use strict";

const sum = (a, b) => a + b;

const res = sum(50, 25);

console.log(res);

const arr = [25, 55, 55, 60];

const x = arr.map((el) => el + 15);
console.log(x);

const createFunc = () => () => 220;
//isto sto i
const createFunc2 = function () {
  return function () {
    return 220;
  };
};

console.log(createFunc()());
console.log(createFunc2()());

const createObh = (a, b) => ({ a: a, b: b });
const createObh2 = (a, b) => {
  return { a: a, b: b };
};

const objN = createObh("Name", "Surname");

console.log(objN);

//this ima istu vrednost koja dolazi iz okruzenja
//primer cita global scope

const newValue = (...data) => data.reduce((acc, cur) => acc + cur, 0);

console.log(newValue(1, 2, 3, 4, 5));
