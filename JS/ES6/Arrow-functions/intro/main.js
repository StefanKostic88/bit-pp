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

let users = [
  { userName: "Pera", lastName: "Peric", id: "54ds0" },
  { userName: "Pera", lastName: "Peric", id: "54ds0" },
  { userName: "asdasd", lastName: "Peric", id: "asdas" },
  // { userName: "Pera", lastName: "Peric", id: "54asdds0" },
  { userName: "Pera", lastName: "Peric", id: "54ds0" },
  { userName: "Pera", lastName: "Peric", id: "54asdds0" },
];

const newUsersIdMap = users.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});

console.log(newUsersIdMap["54ds0"], "a");

/*
let users = [
  {
    name: 'Pera',
    lastName: 'Peric',
    id: '1df3',
  },
  {
    name: 'marko',
    lastName: 'markovic',
    id: '22rf',
  },
  {
    name: 'jovana',
    lastName: 'jovanovic',
    id: 'gf55',
  },
  {
    name: 'stefan',
    lastName: 'stefanovic',
    id: 'kio0',
  },
];

// usersMap = {
// 	'1df3': {
// 		name: 'Pera',
// 		lastName: 'Peric',
// 		id: '1df3',
// 	},
// 	'22rf': {
// 		name: 'marko',
// 		lastName: 'markovic',
// 		id: '22rf',
// 	},
// 	'gf55': {
// 		name: 'jovana',
// 		lastName: 'jovanovic',
// 		id: 'gf55',
// 	},
// 	'kio0': {
// 		name: 'stefan',
// 		lastName: 'stefanovic',
// 		id: 'kio0',
// 	}
// }

const usersIdMap = users.reduce(function (acc, curr) {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(usersIdMap['kio0']);*/
