"use strict";

const getUser = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        firstName: "Pera",
        lastName: "Peric",
        id: 50,
      };
      if (Math.random() > 0.5) {
        resolve(user);
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
  return myPromise;
};

getUser()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//Promise all i race

const getDatas = (id, id2, id3) => {
  return Promise.all([
    fetch(`https://api.tvmaze.com/shows/${id}/cast`),
    fetch(`https://api.tvmaze.com/shows/${id2}/cast`),
    fetch(`https://api.tvmaze.com/shows/${id3}/cast`),
  ]).then((response) => response.map((res) => res.json().then((data) => data)));
};

// const x = getDatas(1, 2, 3).then((data) => console.log(data));
// console.log(x);
