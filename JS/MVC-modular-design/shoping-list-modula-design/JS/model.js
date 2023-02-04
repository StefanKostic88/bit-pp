"use strict";

const modelModule = (function () {
  class Product {
    constructor(prodName, prodPrice, prodExpirationDate) {
      this.prodName = prodName;
      this.prodPrice = +prodPrice.toFixed(2);
      this.prodExpirationDate = new Date(prodExpirationDate);
      this.prodId = Math.floor(Math.random() * 50000) + 1;
    }

    getInfo() {
      return (
        "ID: " +
        (this.prodName.slice(0, 1) + this.prodName.slice(-1)).toUpperCase() +
        this.prodId +
        ", Name: " +
        this.prodName +
        ", Price: " +
        this.prodPrice
      );
    }
  }

  class ShoppingBag {
    constructor() {
      this.listOfProducts = [];
    }
    addProduct(prod) {
      if (!(prod instanceof Product)) throw new Error("Invalid Product Input");
      if (new Date() > prod.prodExpirationDate)
        throw new Error("Cant add product whose exp date expired");
      this.listOfProducts.push(prod);
    }

    calculateTotalPrice() {
      return this.listOfProducts.reduce((acc, el) => {
        acc += el.prodPrice;
        return acc;
      }, 0);
    }

    calcAvrageProductPrice() {
      return (this.calculateTotalPrice() / 2).toFixed(3);
    }
    getMostExpensive() {
      return this.listOfProducts.reduce((cur, next) => {
        if (cur.prodPrice < next.prodPrice) {
          cur = next;
        }
        return cur;
      });
    }
  }

  class PaymentCard {
    constructor(balance, status = false) {
      this.balance = balance;
      this.status = status ? "Active Status" : "Inactive Status";
    }
  }

  const generateProduct = function (prodName, prodPrice, prodExpirationDate) {
    return new Product(prodName, prodPrice, prodExpirationDate);
  };

  const generateShopingList = function () {
    return new ShoppingBag();
  };

  const generatePayment = function (balance, status) {
    return new PaymentCard(balance, status);
  };

  return {
    generateProduct: generateProduct,
    generateShopingList: generateShopingList,
    generatePayment: generatePayment,
  };
})();

// Create checkoutAndBuy function which receives shopping bag and payment card and prints if
// the purchase is successful or not. Purchase is successful only if the amount on the card is greater
// or equal to the total price of products in the shopping bag. If there is not enough money, print out
// the amount that is missing to complete the purchase.
