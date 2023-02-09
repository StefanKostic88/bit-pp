"use strict";

const arr = [22, 55, 66, 44];

const [a, b, ...c] = [...arr];
console.log(c);

const [, , , d] = [...arr];
console.log(d);

const user = {
  firstName: "Stefan",
  lastName: "Kostic",
  age: 1988,
  id: 55,
};

const { firstName: fname, lastName, age, id } = user;

console.log(fname, lastName);

//dekonstrukcija ovjekta u funkciji

function printUserData({ firstName, lastName, age, id }) {
  console.log(firstName, lastName, age, id);
}
function arrData([a, b, c]) {
  console.log(a, b, c);
}
printUserData(user);
arrData(arr);
