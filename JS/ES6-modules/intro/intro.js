"use strict";
//Mduli su singltoni
//CommonJs module isti principi kao ES6 moduli

//Exportovanje

// const movie = { name: "MOvie" };
// const tvShow = { name: "nesto" };

//prva verzija
// module.export = { movie, tvShow };

//druga verzija
// module.export.movie = movie;
// module.export.tvShow = tvShow;

// import
// const { movie, tvShow } = require("Relative path");

// ES6 moduli

//prvo script tag mora da se oznaci type="module"

//prva verzija

// export const movie = { name: "MOvie" };
// export const tvShow = { name: "nesto" };
//druga verzija

const movie = { name: "MOvie" };
const tvShow = { name: "nesto" };
export default { movie, tvShow };
