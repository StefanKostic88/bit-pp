"use strict";

(function (data, ui) {
  var productOne = data.generateProduct("Kobasice", 250.1515151, "11-10-2023");
  var productTwo = data.generateProduct("Kavijar", 500, "11-09-2023");
  var productThree = data.generateProduct("Salama", 185.5555, "11-09-2023");
  var cart = data.generateShopingList();

  var acc = data.generatePayment(2500);
  console.log(acc);

  console.log(cart);
  cart.addProduct(productOne);
  cart.addProduct(productTwo);
  cart.addProduct(productThree);
  console.log(cart);
  console.log(cart.calcAvrageProductPrice());
  console.log(cart.calculateTotalPrice());
})(modelModule, viewModule);
