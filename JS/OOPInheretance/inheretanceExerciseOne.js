"use strict";

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.generateName = function () {
  return this.name + ", " + this.surname;
};
Person.prototype.getFullName = function () {
  return this.generateName();
};

function Employee(name, surname, job, salary) {
  Person.call(this, name, surname);
  this.job = job;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
  console.log(this.getFullName() + ", " + this.salary);
};
Employee.prototype.getSalary = function () {
  return this.salary;
};
Employee.prototype.increaseSalary = function () {
  console.log(this.salary * 1.1);
};

function Developer(name, surname, job, salary, hasSpec) {
  Employee.call(this, name, surname, job, salary);
  this.hasSpec = hasSpec;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
  console.log("specialized for: " + this.hasSpec);
};

function Manager(name, surname, job, salary, department) {
  Employee.call(this, name, surname, job, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
  console.log(this.department);
};
Manager.prototype.changeDepartment = function (dep) {
  this.department = dep;
};

var stefan = new Developer("Stefan", "Kostic", "Programer", 2500, "frontend");
// stefan.increaseSalary();
console.log(stefan);
stefan.getSpecialization();

var menagerJovan = new Manager("Jovan", "Kostic", "Team Lead", 3500, "backend");

console.log(menagerJovan);
menagerJovan.getDepartment();
menagerJovan.changeDepartment("frontend");
console.log(menagerJovan);
