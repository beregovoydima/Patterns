class Product {
    shop() {
        console.log('go shop');
    }
    chose() {
        console.log('buy product');
    }
}
class Service extends Product {
    serviceAbout() {
        console.log('about us');
    }
}
class MyBag {
    myBag() {
        console.log('Apple and orange');
    }
}
class Fasad {
    constructor(fasad, bag) {
        this.fasad = fasad;
        this.bag = bag;
    }
    go() {
        this.fasad.shop();
        this.fasad.chose();
        this.fasad.serviceAbout();
    }
    go2() {
        this.fasad.chose();
    }
    myBag() {
        this.bag.myBag();
    }
    faq() {
        console.log('whats new?');
    }
}
let fasad = new Fasad(new Service(), new MyBag());
let fasad1 = fasad.go();
console.log(fasad1);
console.log('');
console.log(fasad.go2());
console.log('');
console.log(fasad.myBag());
console.log('');
console.log(fasad.faq());
