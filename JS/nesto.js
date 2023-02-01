// var sortWords = function (arr) {
//   var countLetters = function (string) {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//       if (string[i] === "a" || string[i] === "A") {
//         count += 1;
//       }
//     }
//     return count;
//   };

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//       if (countLetters(arr[i]) < countLetters(arr[j])) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         console.log("SWITCH", arr);
//       }
//     }
//   }
//   return arr;
// };
// var x = sortWords([
//   "aaaas",
//   "amazing",
//   "apple",
//   "JavaScript",
//   "tea",
//   "morning",
// ]);
// console.log(x);

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   curSpeed() {
//     this.speed = 150;
//   }
//   acc() {
//     this.speed += 20;
//   }
//   dec() {
//     this.speed -= 10;
//   }
// }

// class fuelCar extends Car {
//   constructor(name, year) {
//     super(name, year);
//     this.canister = 20;
//     this.speed;
//   }

//   acc() {
//     this.speed += 20;
//     this.canister -= 1;
//   }
//   dec() {
//     this.speed -= 10;
//     this.canister -= 0.5;
//   }
// }

// class ElectricCar extends Car {
//   constructor(name, year) {
//     super(name, year);
//     // this.canister = 20;
//     this.battery = 100;
//     this.speed;
//   }
//   dec() {
//     this.speed -= 10;
//     this.battery -= 10;
//   }
// }

// var bmw = new Car("BMW", 2015);

// // console.log(bmw);
// bmw.curSpeed();
// bmw.acc();
// var auri = new fuelCar("audi", 2015, 20);
// auri.curSpeed();
// auri.acc();
// // bmw.acc();
// // bmw.acc();
// // bmw.dec();
// console.log(bmw);
// console.log(auri);

// class Name {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     return this.name;
//   }
// }

// class Surname {
//   constructor(surname) {
//     this.surname = surname;
//   }

//   // this.surname.
//   sayHello(obj) {
//     return obj.sayHello() + " " + this.surname;
//   }
// }

// var x = new Surname("BBB");
// console.log(x);
// var a = new Name("Stefan");
// // console.log(x.sayHello());
// console.log(x.sayHello(a));
