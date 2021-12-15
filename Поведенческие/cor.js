class Shop {
    sum(num) {
        if (this.myMoney(num)) {
            console.log("its it");
        }
        else if (this.next) {
            console.log("stop");
            this.next.sum(num);
        }
        else {
            console.log("no money");
        }
    }
    myMoney(value) {
        return this.money >= value;
    }
    goNext(elem) {
        this.next = elem;
    }
}
class FirstCash extends Shop {
    constructor(money = 200) {
        super();
        this.money = money;
    }
}
class SecondCash extends Shop {
    constructor(money = 200) {
        super();
        this.money = money;
    }
}
class ThirdCash extends Shop {
    constructor(money = 100) {
        super();
        this.money = money;
    }
}
const sum1 = new FirstCash(200);
const sum2 = new SecondCash(600);
const sum3 = new ThirdCash(800);
sum1.goNext(sum2);
sum2.goNext(sum3);
sum1.sum(700);
