interface Car{
  name:string;
  color: string;
  refregerator?: boolean
}

class Car1 implements Car {
  name:string
  color:string
  constructor(name:string = 'BMW', color:string = "black") {
    this.name = name
    this.color=color
  }
}
class Car2 implements Car {
  name:string
  color:string
  refregerator:boolean
  constructor(name:string = 'Audi', color:string = "black",refregerator:boolean = true) {
    this.name = name
    this.color=color
    this.refregerator=refregerator
  }
}
interface Bus{
  name:string;
  color: string;
  refregerator?: boolean
}

class Bus1 implements Bus  {
  name:string
  color:string
  refregerator:boolean
  constructor(name:string = 'BMW', color:string = "black",refregerator:boolean = true) {
    this.name = name
    this.color=color
    this.refregerator=refregerator
  }
}
class Bus2 implements Bus  {
  name:string
  color:string
  refregerator:boolean
  constructor(name:string = 'BMW', color:string = "black",refregerator:boolean = true) {
    this.name = name
    this.color=color
    this.refregerator=refregerator
  }
}

interface Facture{
  createFirst(name:string,color:string,refregerator:boolean)
  createSecond(name:string,color:string,refregerator:boolean)
}

class FactureCar implements Facture{
  createFirst(name:string,color:string,refregerator:boolean){
    return new Car1(name,color)
  }
  createSecond(name:string,color:string,refregerator:boolean){
    return new Car2(name,color,refregerator)
  }
}
class FactureBus implements Facture{
  createFirst(name:string,color:string,refregerator:boolean){
    return new Bus1(name,color,refregerator)
  }
  createSecond(name:string,color:string,refregerator:boolean){
    return new Bus2(name,color,refregerator)
  }
}
class AbstractFactory {
  static AF={
    factureCar:FactureCar,
    factureBus:FactureBus,
  } 
  factorycreate(factory:string = 'factureCar'){
    const buy = AbstractFactory.AF[factory]
    const click = new buy()
    return click
  }
}


const absFactory = new AbstractFactory()
const download = [
  absFactory.factorycreate('factureCar').createFirst('lada','blue'),
  absFactory.factorycreate('factureCar').createSecond('zil','blue',true),
  absFactory.factorycreate('factureBus').createFirst('mersedes','blue',false),
  absFactory.factorycreate('factureBus').createSecond('opel','blue'),
  absFactory.factorycreate('factureBus').createSecond(),
]
download.forEach(m=>{
  return console.log(m)})

