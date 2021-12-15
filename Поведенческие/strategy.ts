class Shop {
  public eat
  buyEat(){
    return this.eat
  }
}
interface Eat{

}
class Pizza extends Shop implements Eat {
  constructor() {
    super()
    this.eat = 'pizza'
  }
}
class Gamburger extends Shop  implements Eat  {
  constructor() {
    super()
    this.eat = 'gamburger'
  }
}
class Shaurma extends Shop  implements Eat  {
  constructor() {
    super()
    this.eat = 'shaurma'
  }
}

class Buy {
  buy( eat){
    return eat.buyEat()
  }
}

const eat = new Buy()

console.log(eat.buy(new Pizza));
console.log(eat.buy(new Gamburger));
console.log(eat.buy(new Shaurma));

