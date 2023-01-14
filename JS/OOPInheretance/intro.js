"use strict";

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  //   this.printInfo = function () {
  //     console.log(this.name + "" + this.surname);
  //   };
}
Person.prototype.fullName = function () {
  return this.name + " " + this.surname;
};

Person.prototype.printInfo = function () {
  console.log(this.fullName());
};

var stefan = new Person("Stefan", "Kostic");
console.log(stefan);
stefan.printInfo();

//1. we would like Programmer to inherit props from Person Class

function Programer(name, surname, favoriteLanguage) {
  //   this.name = name;
  //   this.surname = surname;
  Person.call(this, name, surname);
  //koristis call funkciju
  //pozovi ovu funkkciju i ona trazi this koju ce koristiti umesto svoog thisa
  //saljem ti this od ove klase na koju ces staviti name i surname
  this.favoriteLanguage = favoriteLanguage;
}

// programer.printInfo();
//Proces nasledjivanja nije kompletan
//print info nije funkcija jos uvek

// 2. we create the object with prototype Person prototype

Programer.prototype = Object.create(Person.prototype);

//create kreira objekat koji koristi prototip koji mu damo
//prototop Programer nasledjuje prototip persona

//3. change construtor name
Programer.prototype.constructor = Programer;

//polimorfizam
Programer.prototype.printInfo = function () {
  console.log(this.fullName() + ", favorite language " + this.favoriteLanguage);
};

var programer = new Programer("Pera", "Kostic", "JS");
console.log(programer);

programer.printInfo();

console.log(programer.constructor); //konstruktor je Person, ali treba da bude Programer
