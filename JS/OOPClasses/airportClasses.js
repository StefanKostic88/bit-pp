"use strict";

(function () {
  class Person {
    constructor(name, surName) {
      this.name = name;
      this.surName = surName;
      this.getData = function () {
        return this.name + " " + this.surName;
      };
    }
  }

  class Seat {
    constructor(num, category) {
      this.number = num || Math.round(Math.random() * 100);
      this.category = category || "e";
      this.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
      };
    }
  }

  class Passenger {
    constructor(person, seat) {
      if (!(person instanceof Person) || !(seat instanceof Seat))
        throw new Error("Not valid parameters");
      this.person = person;
      this.seat = seat;
      this.getData = function () {
        return this.seat.getData() + ", " + this.person.getData();
      };
    }
  }

  class Flight {
    constructor(rel, date) {
      this.relation = rel;
      this.date = new Date(date);
      this.passengerList = [];
      this.addPassenger = function (passenger) {
        if (!(passenger instanceof Passenger))
          throw new Error("Not a valid passenger");
        return this.passengerList.push(passenger);
      };
      this.passngerNumber = function () {
        return this.passengerList.length;
      };
      this.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var result = day + "." + month + "." + year + ", " + this.relation;
        this.passengerList.forEach((el) => {
          result += "\n\t\t\t\t\t\t" + el.getData();
        });
        return result;
      };
    }
  }

  class Airport {
    constructor(name = "Nikola Tesla") {
      this.name = name;
      this.listOfFlights = [];
      this.addFlight = function (flight) {
        if (!(flight instanceof Flight)) throw new Error("Invalid Flight");
        return this.listOfFlights.push(flight);
      };
      this.totalPassnegers = function () {
        return this.listOfFlights.reduce((acc, el) => {
          return (acc += el.passngerNumber());
        }, 0);
      };

      this.getData = function () {
        var result =
          "Airport: " +
          this.name +
          ", total passengers: " +
          this.totalPassnegers();
        this.listOfFlights.forEach((el) => {
          result += "\n\t\t\t" + el.getData();
        });
        return result;
      };
    }
  }

  var createFlight = function (rel, date) {
    return new Flight(rel, date);
  };

  var createPassenger = function (name, surname, seat, category) {
    var passInfo = new Person(name, surname);
    var seatNum = new Seat(seat, category);
    return new Passenger(passInfo, seatNum);
  };

  try {
    var passArr = [
      { name: "John", surname: "Snow", seatNum: 1, category: "b" },
      { name: "Cersei", surname: "Lannister", seatNum: 2, category: "b" },
      { name: "Daenerys", surname: "Targaryen", seatNum: 14, category: null },
      { name: "Tyrion", surname: "Lannister", seatNum: null, category: null },
    ];

    var [johnS, cerseiL, daenerysT, tyrionL] = passArr.map((el) => {
      return createPassenger(el.name, el.surname, el.seatNum, el.category);
    });

    var flight1 = createFlight("Belgrade - Paris", "10/25/2017");
    var flight2 = createFlight("Barcelona - Belgrade", "11/11/2017");

    flight1.addPassenger(johnS);
    flight1.addPassenger(cerseiL);
    flight2.addPassenger(daenerysT);
    flight2.addPassenger(tyrionL);

    var tesla = new Airport();
    tesla.addFlight(flight1);
    tesla.addFlight(flight2);

    var data = tesla.getData();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
})();
