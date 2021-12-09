class Tesla {
  color:string;
  readonly cost:number;
  constructor(color:string) {
   
    this.color = color;
    this.cost = 40000;
  }
}

class Opel {
  color:string;
  readonly cost:number;
  constructor(color:string) {
    this.color = color;
    this.cost = 15000;
  }
}
class Ford {
  color:string;
  readonly cost:number;
  constructor(color:string) {
    this.color = color;
    this.cost = 20000;
  }
}
class Lada {
  color:string;
  readonly cost:number;
  constructor(color:string) {
    this.color = color;
    this.cost = 5000;
  }
}



class Car {
  static cars={
    tesla:Tesla,
    opel: Opel,
    ford: Ford,
    lada:Lada,
  }
  create(color = 'black', carName = 'tesla'){
    const buy = Car.cars[carName];
    const car = new buy(color);
    car.carName = carName;
    car.about = function(){
      console.log(`my car is ${this.carName} color ${this.color}  and her cost ${this.cost}`);
    }
    return car
  }
}

const factory = new Car();

const mycar = [
  factory.create('black','opel'),
  factory.create('red','lada'),
  factory.create('blue','ford'),
  factory.create('white'),
]

mycar.forEach((key) => {
  key.about()
});

