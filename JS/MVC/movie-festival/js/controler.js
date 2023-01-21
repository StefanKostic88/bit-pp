var createMovieBtn = document.querySelector("#create-movie-btn");
var createProgramBtn = document.querySelector("#create-program-btn");

var movieTitleEl = document.querySelector("#movie-title");
var movieLengthEl = document.querySelector("#movie-length");
var movieGenreEl = document.querySelector("#genre-select");

var moviesContainerEl = document.querySelector("#movies-container");
var programContainerEl = document.querySelector("#program-container");
var addMovieErrorEl = document.getElementById("add-movie-error");
var addProgramErrorEl = document.getElementById("add-program-error");

var moviesListContainer = document.getElementById("movie-list");

var dateInputEl = document.querySelector("#program-date");

var arr = [];

var addNewMovie = function (e) {
  e.preventDefault();

  if (!movieTitleEl.value || !movieLengthEl.value || !movieGenreEl.value) {
    console.log("Error");
    addMovieErrorEl.textContent = "Invalid Input, all fields are required";
    return;
  }

  addMovieErrorEl.textContent = "";

  var genre = new Genre(movieGenreEl.value);
  var movie = new Movie(movieTitleEl.value, movieLengthEl.value, genre);
  var tempLi = document.createElement("li");
  tempLi.textContent = movie.getData();
  moviesContainerEl.append(tempLi);

  arr.push(movie);
  console.log(arr);

  var index = arr.length - 1;
  console.log(index);

  var tempMovieOption = document.createElement("option");
  tempMovieOption.setAttribute("value", "movie-" + index);
  tempMovieOption.textContent = movieTitleEl.value;
  moviesListContainer.append(tempMovieOption);
};

var addNewProgram = function (e) {
  e.preventDefault();

  if (new Date(dateInputEl.value).getTime() < Date.now()) {
    addProgramErrorEl.textContent = "Invalid Date";
    return;
  }

  //   if(){} provera da li imamo postojeci datum i tu se koristi ona some metoda

  addProgramErrorEl.textContent = "";

  var inputDate = new Program(dateInputEl.value);

  var tempLi = document.createElement("li");
  tempLi.textContent = inputDate.getData();
  programContainerEl.append(tempLi);
};

createMovieBtn.addEventListener("click", addNewMovie);
createProgramBtn.addEventListener("click", addNewProgram);
