class NewCar {
  newEngine() {
    return "I AM NEW CAR";
  }
}
class OldCar {
  oldEngine() {
    return "i am old car";
  }
}
class CarAdapter extends NewCar {
  constructor(oldCar) {
    super();
    this.oldCar = oldCar;
  }
  newEngine() {
    const result = this.oldCar.oldEngine().toUpperCase();
    return `After adapter: ${result}`;
  }
}

function clientCode(newCar) {
  console.log(newCar.newEngine());
}
const newcar = new NewCar();
clientCode(newcar);
console.log("");
const oldCar = new OldCar();
const adapter = new CarAdapter(oldCar);
clientCode(adapter);
