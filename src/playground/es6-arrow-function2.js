const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(20, 30));

const user = {
  name: 'Luca',
  cities: ['Sydney', 'Barcelona', 'London'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // });
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 3,
  multiply(){
    return this.numbers.map((number) => number * number);
  }
};

console.log(multiplier.multiply());
