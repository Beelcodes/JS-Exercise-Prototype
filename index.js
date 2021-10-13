/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
//constructor Airplane que recibe 1 argumento (name). el argumento name es asignado a la propiedad (name) y la propiedad isFlying es inicializado en false
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
// crear metodo takeOff en Airplane
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
//crear metodo land en Airplane
Airplane.prototype.land = function () {
  this.isFlying = false;
};
//instanciar 2 objetos Airplane
const airplane1 = new Airplane("Halcon milenario");
const airplane2 = new Airplane("Baron Rojo");
console.log("nombre del airplane1:", airplane1.name);
console.log("esta en el aire?1", airplane1.isFlying);
console.log("nombre del airplane2:", airplane2.name);
console.log("esta en el aire?2", airplane2.isFlying);
//llamar metodo takeOff en instancia 1. esto no tiene efecto en la instancia #2
airplane1.takeOff();
console.log("esta en el aire?1", airplane1.isFlying);
console.log("esta en el aire?2", airplane2.isFlying);
airplane1.land();
console.log("esta en el aire?1", airplane1.isFlying);

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

//constructor person con nombre, edad y array vacio "estomago"
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
//agregar la funcion .eat al constructor person junto con la condicional
Person.prototype.eat = function (someFood) {
  if (this.stomach.length < 10) {
    this.stomach.push(someFood);
  }
};
//agregar poop = vaciar array
Person.prototype.poop = function () {
  this.stomach = [];
};
// metodo .toString que retorna nombre, edad
Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};
const person = new Person("Bob Newman", "45");
person.eat("Chocolate");
console.log(person);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, mpg) {
  this.model = model;
  this.milesPerGallon = mpg;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank = this.tank + gallons;
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working!");
  return "bar";
}
foo();
module.exports = {
  foo,
  Person,
  Car,
  Baby,
};
