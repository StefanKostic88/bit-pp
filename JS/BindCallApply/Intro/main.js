"use strict";

//FILO First in last out

function logThis(a) {
  console.log(this, a); //global
}

// logThis();

var user = {
  firstName: "Stefan",
  lastName: "Kostic",
  sayHello: function (string) {
    console.log(string + " " + this.firstName + "!");
  },
  sayHello2: function (string, simobtl) {
    console.log(string + " " + this.firstName + " " + simobtl);
  },
};

user.sayHello("Zdravo");

logThis.call(user, "OBJEKAT"); //
// prvi parametar je this setujes na obj, posle idu parametri koje funkcija regularno prima

var user2 = {
  firstName: "Marko",
};

user.sayHello.call(user2, "Zdravo"); //pozajmili smo metodu usera i koristimo je za user2

//Apply ide isto samo prma parametre u nizu

user.sayHello2.apply(user2, ["Zdravo", "00000"]);

//bind
//kreiras funkciju koja ima novi bindovan this, i parametre koje pozivas
//kao regularnu funkciju kasnije bez parametara

var newFunction = user.sayHello2.bind(user2, "Zdravo", "00000");

newFunction();
console.log(user2);

function a() {
  console.log(this);
  function b() {
    console.log(this);
  }
  b.call(this); // ovo osigurava da se call primeni na i na internu funkciju
  //this sada postaje obj bbb i on se prosledjuje u call funkciji za b
  //i sada su this oba
  // u suprotnom prvo this bi bbio bbb a drugi bi bio global
}

a();

var bbb = { name: "aaaa" };

var nesto = a.call(bbb);
