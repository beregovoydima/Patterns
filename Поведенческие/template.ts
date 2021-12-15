abstract class BuildTemplate {
  public cost: number
  constructor(cost:number = 10000){
    this.cost=cost
  }
  public build():void{
    this.fundament()
    this.wall()
    this.roof()
  }
  abstract fundament(): void;
  abstract wall(): void;
  abstract roof(): void;

  public salary(){
    console.log(`цена работы ${this.cost}`);
  }
}

interface House{
  fundament()
  wall()
  roof()
}

class House1 extends BuildTemplate implements House{
  constructor(cost){
    super(cost)
  }
  fundament(){
    console.log('Залили фундамент первого дома');
  }
  wall(){
    console.log('построили кирпичную стену');
  }
  roof(){
    console.log('накрыли шифером');
  }

}
class House2 extends BuildTemplate implements House{
  constructor(cost){
    super(cost)
  }
  fundament(){
    console.log('Залили фундамент второго дома');
  }
  wall(){
    console.log('построили шлакоблочную стену');
  }
  roof(){
    console.log('накрыли профнастилом');
  }

}

const house1 = new House1(20000)
const house2 = new House1(40000)
house1.build()
house1.salary()
console.log('');
house2.build()
house2.salary()