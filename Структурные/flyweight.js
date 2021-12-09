class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Cars {
    constructor() {
        this.cars = [];
    }
    create(name, price) {
        const myCar = this.myCar(name);
        if (myCar) {
            return myCar;
        }
        const newCar = new Car(name, price);
        this.cars.push(newCar);
        return newCar;
    }
    myCar(name) {
        return this.cars.find(car => car.name === name);
    }
}
const car = new Cars();
const audi = car.create('audi', 10000);
const bmw = car.create('bmw', 20000);
const audi2 = car.create('audi', 50000);
const opel = car.create('opel', 5000);
const opel2 = car.create('opel', 20000);
console.log(audi);
console.log(audi2);
console.log(bmw);
console.log(opel);
console.log(opel2);
