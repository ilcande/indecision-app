'use strict';

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(20, 30));

var user = {
  name: 'Luca',
  cities: ['Sydney', 'Barcelona', 'London'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 3,
  multiply: function multiply() {
    return this.numbers.map(function (number) {
      return number * number;
    });
  }
};

console.log(multiplier.multiply());
