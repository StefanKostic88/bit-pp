"use strict";

function App(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}

App.prototype.isCCLicence = function (val) {
  if (val === "CCLicence") {
    return true;
  } else {
    return false;
  }
};
App.prototype.like = function () {
  this.stars++;
};
App.prototype.showStars = function () {
  console.log(this.stars);
};
App.prototype.getData = function (data) {
  console.log(data);
  var info = "information:";
  for (const [key, val] of Object.entries(data)) {
    info += "\n" + key + ": " + val;
  }
  console.log(info);
};

function WebApp(name, url, tehnologies, licence, stars) {
  App.call(this, name, licence, stars);

  this.url = url;
  this.tehnologies = tehnologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.reactBased = function () {
  if (this.tehnologies === "React") return true;
  else return false;
};

var webGame = new WebApp(
  "game1",
  "https://www.nesto.com",
  "React",
  "CCLicence",
  4
);

// webGame.getData(webGame);
// console.log(webGame.reactBased());
// webGame.like();
// webGame.showStars();

function MobileApp(name, platforms, license, stars) {
  App.call(this, name, license, stars);

  this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.isForAndroid = function () {
  if (this.platforms.includes("Android")) return true;
  else return false;
};

var mobileGame = new MobileApp("mob game", ["Android"], "nesto", 1);
console.log(mobileGame);
mobileGame.like();
mobileGame.showStars();

mobileGame.getData(mobileGame);
console.log(mobileGame.isForAndroid());
