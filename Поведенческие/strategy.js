class Shop {
    buyEat() {
        return this.eat;
    }
}
class Pizza extends Shop {
    constructor() {
        super();
        this.eat = 'pizza';
    }
}
class Gamburger extends Shop {
    constructor() {
        super();
        this.eat = 'gamburger';
    }
}
class Shaurma extends Shop {
    constructor() {
        super();
        this.eat = 'shaurma';
    }
}
class Buy {
    buy(eat) {
        return eat.buyEat();
    }
}
const eat = new Buy();
console.log(eat.buy(new Pizza));
console.log(eat.buy(new Gamburger));
console.log(eat.buy(new Shaurma));
