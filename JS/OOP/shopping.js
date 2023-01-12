"use strict";
(function () {
  console.log("Hi");

  var Product = function (
    name,
    price,
    expDate,
    id = (Math.random() * 5).toFixed(4)
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.expirationData = new Date(expDate);
    this.getInfo = function () {
      return (
        this.name.slice(0, 1).toUpperCase() +
        this.name.slice(-1).toUpperCase() +
        this.id.split(".").join("") +
        ", " +
        this.name +
        ", " +
        this.price.toFixed(2)
      );
    };
  };
  var ShoppingBag = function () {
    this.listOfProducts = [];
    this.addProduct = function (product) {
      if (!(product instanceof Product))
        throw new Error("Invalid Product Input");
      if (new Date() > product.expirationData)
        throw new Error("Cant add product whose exp date expired");
      this.listOfProducts.push(product);
    };

    this.calcTotal = function () {
      return this.listOfProducts.reduce((acc, el) => {
        acc += el.price;
        return acc;
      }, 0);
    };

    this.calcAvragePrice = function () {
      return this.calcTotal() / this.listOfProducts.length;
    };
    this.getMostExpensive = function () {
      return this.listOfProducts.reduce((cur, next) => {
        if (cur.price < next.price) {
          cur = next;
        }
        return cur;
      });
    };
  };

  var PaymentCard = function (accBalance, status, valid) {
    this.accountBalance = accBalance.toFixed(2);
    if (!status) throw new Error("Invalid Card status");
    this.status = status;
    this.validityDate = new Date(valid);
    this.updateBalance = function (amount) {
      this.accountBalance = this.accountBalance - amount;
    };
  };

  var checkoutAndBuy = function (shoppingBag, card) {
    var isValid = shoppingBag.calcTotal() < card.accountBalance;
    var calcDiference = shoppingBag.calcTotal() - card.accountBalance;
    if (!isValid)
      throw new Error("Purchase not completed, you need " + calcDiference);
    card.updateBalance(shoppingBag.calcTotal());
    return "Purchase successful";
  };

  try {
    var prodArr = [
      { name: "Banana", price: 25.88, date: "12/28,2022" },
      { name: "Ananas", price: 15.87, date: "10/15,2023" },
      { name: "PC", price: 1000.99, date: "12/28,2023" },
      { name: "Iphone", price: 900.99, date: "02/05,2023" },
    ];
    var newProdArr = prodArr.map(
      (el) => new Product(el.name, el.price, el.date)
    );

    var [prod, prod2, prod3, prod4] = newProdArr;

    var shopBag = new ShoppingBag();

    newProdArr.forEach((el) => shopBag.addProduct(el));

    var myCard = new PaymentCard(2850.855555, true, "12/11/2024");
    var data = checkoutAndBuy(shopBag, myCard);

    console.log(data, myCard.accountBalance);
  } catch (error) {
    console.log(error.message);
  }
})();
