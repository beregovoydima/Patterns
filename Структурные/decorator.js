class Car1 {
    constructor() {
        this.name = 'Car';
        this.price = 10000;
    }
    getPrice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
}
class Volvo extends Car1 {
    constructor() {
        super();
        this.price = 20000;
        this.name = 'Volvo';
    }
}
class Audi extends Car1 {
    constructor() {
        super();
        this.price = 30000;
        this.name = 'Audi';
    }
}
class WithParktronic extends Car1 {
    constructor(car) {
        super();
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 500;
    }
    getName() {
        return `${this.car.getName()} with Parktronik`;
    }
}
class WithCondition extends Car1 {
    constructor(car) {
        super();
        this.car = car;
    }
    getPrice() {
        return this.car.getPrice() + 500;
    }
    getName() {
        return `${this.car.getName()} with condition`;
    }
}
let volvo = new Volvo();
volvo = new WithCondition(volvo);
console.log(volvo.getName(), volvo.getPrice());
let audi = new Audi();
audi = new WithParktronic(audi);
audi = new WithCondition(audi);
console.log(audi.getName(), audi.getPrice());
