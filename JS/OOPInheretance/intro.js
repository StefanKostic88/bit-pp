"use strict";

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   //   this.printInfo = function () {
//   //     console.log(this.name + "" + this.surname);
//   //   };
// }
// Person.prototype.fullName = function () {
//   return this.name + " " + this.surname;
// };

// Person.prototype.printInfo = function () {
//   console.log(this.fullName());
// };

// var stefan = new Person("Stefan", "Kostic");
// console.log(stefan);
// stefan.printInfo();

// //1. we would like Programmer to inherit props from Person Class

// function Programer(name, surname, favoriteLanguage) {
//   //   this.name = name;
//   //   this.surname = surname;
//   Person.call(this, name, surname);
//   //koristis call funkciju
//   //pozovi ovu funkkciju i ona trazi this koju ce koristiti umesto svoog thisa
//   //saljem ti this od ove klase na koju ces staviti name i surname
//   this.favoriteLanguage = favoriteLanguage;
// }

// // programer.printInfo();
// //Proces nasledjivanja nije kompletan
// //print info nije funkcija jos uvek

// // 2. we create the object with prototype Person prototype

// Programer.prototype = Object.create(Person.prototype);

// //create kreira objekat koji koristi prototip koji mu damo
// //prototop Programer nasledjuje prototip persona

// //3. change construtor name
// Programer.prototype.constructor = Programer;

// //polimorfizam
// Programer.prototype.printInfo = function () {
//   console.log(this.fullName() + ", favorite language " + this.favoriteLanguage);
// };

// var programer = new Programer("Pera", "Kostic", "JS");
// console.log(programer);

// programer.printInfo();

// console.log(programer.constructor); //konstruktor je Person, ali treba da bude Programer

//Class

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }
// Person.prototype.generateName = function () {
//   return this.name + ", " + this.surname;
// };
// Person.prototype.getFullName = function () {
//   return this.generateName();
// };

// function Employee(name, surname, job, salary) {
//   Person.call(this, name, surname);
//   this.job = job;
//   this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.getData = function () {
//   console.log(this.getFullName() + ", " + this.salary);
// };
// Employee.prototype.getSalary = function () {
//   return this.salary;
// };
// Employee.prototype.increaseSalary = function () {
//   console.log(this.salary * 1.1);
// };

// function Developer(name, surname, job, salary, hasSpec) {
//   Employee.call(this, name, surname, job, salary);
//   this.hasSpec = hasSpec;
// }

// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;

// Developer.prototype.getSpecialization = function () {
//   console.log("specialized for: " + this.hasSpec);
// };

// function Manager(name, surname, job, salary, department) {
//   Employee.call(this, name, surname, job, salary);
//   this.department = department;
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.getDepartment = function () {
//   console.log(this.department);
// };
// Manager.prototype.changeDepartment = function (dep) {
//   this.department = dep;
// };

// var stefan = new Developer("Stefan", "Kostic", "Programer", 2500, "frontend");
// // stefan.increaseSalary();
// console.log(stefan);
// stefan.getSpecialization();

// var menagerJovan = new Manager("Jovan", "Kostic", "Team Lead", 3500, "backend");

// console.log(menagerJovan);
// menagerJovan.getDepartment();
// menagerJovan.changeDepartment("frontend");
// console.log(menagerJovan);

class Person {
  //constructor se odmah poziva prilikom iniciranja objekta
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  fullName() {
    return this.name + " " + this.surname;
  }
  printInfor() {
    console.log(this.fullName());
  }
}

var pera = new Person("Pera", "Peric");
console.log(pera);

class Programer extends Person {
  constructor(name, surname, favLanguage) {
    super(name, surname);
    this.favLanguage = favLanguage;
  }
  printInfor() {
    console.log(super.fullName() + " " + this.favLanguage);
  }
}
