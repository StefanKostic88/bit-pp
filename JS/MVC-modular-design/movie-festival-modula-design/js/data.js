var dataModule = (function () {
  class Festival {
    constructor() {
      this.listOfMovies = [];
      this.listOfPrograms = [];
    }

    addMovieToList(movie) {
      return this.listOfMovies.push(movie);
    }
    addProgramToList(program) {
      return this.listOfPrograms.push(program);
    }
  }

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
    getTitle() {
      return this.name;
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

    getProgramOptions() {
      return "Program for: " + this.getFormatedDate();
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

  var festival = new Festival();

  var generateMovie = function (dataObj) {
    return new Movie(dataObj.title, dataObj.length, new Genre(dataObj.genre));
  };

  var generateProgram = function (date) {
    return new Program(date);
  };

  return {
    festival: festival,
    generateMovie: generateMovie,
    generateProgram: generateProgram,
  };
})();
