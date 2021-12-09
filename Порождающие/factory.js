class Tesla {
  constructor(color) {
    this.color = color;
    this.cost = 40000;
  }
}
class Opel {
  constructor(color) {
    this.color = color;
    this.cost = 15000;
  }
}
class Ford {
  constructor(color) {
    this.color = color;
    this.cost = 20000;
  }
}
class Lada {
  constructor(color) {
    this.color = color;
    this.cost = 5000;
  }
}
class Car {
  create(color = "black", carName = "tesla") {
    const buy = Car.cars[carName];
    const car = new buy(color);
    car.carName = carName;
    car.about = function () {
      console.log(
        `my car is ${this.carName} color ${this.color}  and her cost ${this.cost}`
      );
    };
    return car;
  }
}
Car.cars = {
  tesla: Tesla,
  opel: Opel,
  ford: Ford,
  lada: Lada,
};
const factory = new Car();
const mycar = [
  factory.create("black", "opel"),
  factory.create("red", "lada"),
  factory.create("blue", "ford"),
  factory.create("white"),
];
mycar.forEach((key) => {
  key.about();
});
