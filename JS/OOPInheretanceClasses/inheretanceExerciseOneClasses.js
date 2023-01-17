"use strict";
"use strict";

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  generateName() {
    return this.name + ", " + this.surname;
  }
  getFullName() {
    return this.generateName();
  }
}

class Employee extends Person {
  constructor(name, surname, job, salary) {
    super(name, surname);
    this.job = job;
    this.salary = salary;
  }
  getData() {
    console.log(super.getFullName() + ", " + this.job);
  }
  getSalary() {
    return this.salary;
  }
  increaseSalary() {
    this.salary *= 1.1;
  }
}

class Developer extends Employee {
  constructor(name, surname, job, salary, hasSpec) {
    super(name, surname, job, salary);
    this.hasSpec = hasSpec;
  }
  getSpecialization() {
    console.log("specialized for: " + this.hasSpec);
  }
}

class Manager extends Employee {
  constructor(name, surname, job, salary, department) {
    super(name, surname, job, salary);
    this.department = department;
  }
  getDepartment() {
    console.log(this.department);
  }
  changeDepartment(dep) {
    this.department = dep;
  }
}

var stefan = new Developer("Stefan", "Kostic", "Programer", 2500, "frontend");
// stefan.increaseSalary();
console.log(stefan);
stefan.getSpecialization();

var menagerJovan = new Manager("Jovan", "Kostic", "Team Lead", 3500, "backend");

console.log(menagerJovan);
menagerJovan.getDepartment();
menagerJovan.changeDepartment("frontend");
console.log(menagerJovan);
