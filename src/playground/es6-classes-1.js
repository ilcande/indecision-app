class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi! I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor) {
      description = description += ` His/Her major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, major, homeLocation) {
    super(name, age, major);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let location = super.getGreeting();

    if (this.homeLocation) {
      location = location += ` I'm visiting from ${this.homeLocation}`;
    }

    return location;
  }
}

const me = new Traveller('Luca', 31, 'Software Engineering', 'Barcelona');
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
