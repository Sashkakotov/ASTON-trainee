// TODO create object Person, after create Person2 with methods Person.

// Prototype style
function PersonPrototype(firstName, secondName, age) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
}
PersonPrototype.prototype.getFullName = function () {
  return `${this.firstName} ${this.secondName}`;
};
PersonPrototype.prototype.logInfo = function () {
  return `${this.firstName} ${this.secondName} ${this.age}`;
};

const Person = new PersonPrototype("Sasha", "Kotov", 32);
let Person2 = new Person.constructor("Pasha", "Ivanov", 18);

console.log(Person2.getFullName()); //Pasha Ivanov
console.log(Person.logInfo()); //Sasha Kotov 32
console.log(Person2.logInfo()); //Pasha Ivanov 18

// Class style
class PersonPrototype {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}
const Person3 = new PersonPrototype("Sasha", "Kotov", 32);
const Person4 = new PersonPrototype("Pasha", "Ivanov", 18);

PersonPrototype.prototype.logInfo = function () {
  return `${this.firstName} ${this.secondName} ${this.age}`;
};
console.log(Person3.logInfo()); //Sasha Kotov 32
console.log(Person4.logInfo()); //Pasha Ivanov 18

// TODO create class PersonThree with get and set and constructor. Do inherit class from class Person

class PersonParent {
  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  getFullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

class PersonThree extends PersonParent {
  constructor(firstName, secondName, age) {
    super();
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }
  get name() {
    return this.firstName;
  }
  set name(value) {
    this.firstName = value;
  }
}
const PersonObject = new PersonThree("Sasha", "Kotov", 32);
PersonObject.name = "Pasha";

console.log(PersonObject.getFullName()); //Pasha Kotov
