class NewCar {
  newEngine(){
    return 'I AM NEW CAR'
  }
}

class OldCar {
  oldEngine(){
    return 'i am old car'
  }
}

class CarAdapter extends NewCar{
  oldCar: OldCar
  constructor(oldCar: OldCar){
    super()
    this.oldCar=oldCar
  }
  newEngine(){
    const result = this.oldCar.oldEngine().toUpperCase()
    return `After adapter: ${result}`
  }
}

function clientCode(newCar: NewCar) {
  console.log(newCar.newEngine());
}


const newcar = new NewCar()
clientCode(newcar)

const oldCar = new OldCar()

const adapter = new CarAdapter(oldCar)

clientCode(adapter)



