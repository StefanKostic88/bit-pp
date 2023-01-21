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
    this.listOfMovies = [];
  }

  getFormatedDate() {
    return (
      this.date.getDate() +
      "." +
      (this.date.getMonth() + 1) +
      "." +
      this.date.getFullYear()
    );
  }

  getMovieMinutes() {
    return this.listOfMovies.reduce((acc, el) => {
      acc += el.length;
      return acc;
    }, 0);
  }

  getData() {
    return (
      this.getFormatedDate() +
      ", " +
      this.listOfMovies.length +
      " movies, duration " +
      this.getMovieMinutes() +
      " minutes"
    );
  }
  chekIfValid() {
    return this.date.getTime();
  }
  addMovieToList(movie) {
    this.listOfMovies.push(movie);
  }
}

class Festival {
  constructor() {
    this.listOfMovies = [];
    this.listOfPrograms = [];
  }

  addMovieToList(movie) {
    this.listOfMovies.push(movie);
  }

  addProgramToList(d) {
    this.listOfPrograms.push(d);
  }
}
