class Genre {
  constructor(name) {
    this.name = name;
  }
  getData() {
    return (this.name.slice(0, 1) + this.name.slice(-1)).toUpperCase();
  }
}

class Movie {
  constructor(name, length, genre) {
    if (!(genre instanceof Genre)) throw new Error("invalid input");
    this.genre = genre;
    this.name = name;
    this.length = length;
  }
  getData() {
    return this.name + ", " + this.length + "min, " + this.genre.getData();
  }
}

class Program {
  constructor(date) {
    this.date = new Date(date);
    this.listOfMOvies = [];
  }

  getData() {
    var tempDate =
      this.date.getDate() +
      "." +
      (this.date.getMonth() + 1) +
      "." +
      this.date.getFullYear();

    return (
      tempDate +
      ", " +
      this.listOfMOvies.length +
      " movies, duration" +
      " 120 minutes"
    );
  }
}
