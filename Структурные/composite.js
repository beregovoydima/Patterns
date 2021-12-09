class Box {
    getBox() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setBox(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
}
class Box1 extends Box {
    constructor() {
        super();
        this.setBox('Box1');
        this.setPrice(500);
    }
}
class Box11 extends Box1 {
    constructor() {
        super();
        this.setBox('Box11');
        this.setPrice(300);
    }
}
class Box12 extends Box1 {
    constructor() {
        super();
        this.setBox('Box12');
        this.setPrice(400);
    }
}
class Box2 extends Box {
    constructor() {
        super();
        this.setBox('Box2');
        this.setPrice(100);
    }
}
class Box3 extends Box {
    constructor() {
        super();
        this.setBox('Box3');
        this.setPrice(200);
    }
}
class AllBox extends Box {
    constructor() {
        super();
        this.boxes = [];
    }
    add(box) {
        this.boxes.push(box);
    }
    getPrice() {
        return this.boxes.map(box => box.getPrice()).reduce((item1, item2) => item1 + item2);
    }
}
class First extends AllBox {
    constructor() {
        super();
        this.setBox('item1');
    }
}
class Second extends AllBox {
    constructor() {
        super();
        this.setBox('item2');
    }
}
const first = new First();
first.add(new Box1);
first.add(new Box11);
first.add(new Box12);
first.add(new Box2);
first.add(new Box3);
console.log(`${first.getBox()} price is ${first.getPrice()}`);
const second = new Second();
second.add(new Box3);
second.add(new Box11);
console.log(`${second.getBox()} price is ${second.getPrice()}`);
