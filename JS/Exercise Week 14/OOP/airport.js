"Use strict";
(function () {
  console.log("hi");

  var Person = function (name, surName) {
    this.name = name;
    this.surName = surName;
    this.getData = function () {
      return this.name + " " + this.surName;
    };
  };

  var Seat = function (num = Math.round(Math.random() * 100), category = "e") {
    this.number = num;
    this.category = category;
    this.getData = function () {
      return this.number + ", " + this.category.toUpperCase();
    };
  };
  var Passenger = function (person, seat) {
    if (!(person instanceof Person) || !(seat instanceof Seat))
      throw new Error("Not valid parameters");
    this.person = person;
    this.seat = seat;
    this.getData = function () {
      return this.seat.getData() + ", " + this.person.getData();
    };
  };

  try {
    var stefan = new Person("Stefan", "Kostic");
    var seat1 = new Seat();
    var pass = new Passenger(stefan, seat1);
    console.log(stefan, seat1);
    console.log(pass);
    // console.log(stefan.getData());
    // console.log(seat1.getData());
    console.log(pass.getData());
  } catch (err) {
    console.log(err.message);
  }
})();
