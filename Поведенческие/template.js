class BuildTemplate {
    constructor(cost = 10000) {
        this.cost = cost;
    }
    build() {
        this.fundament();
        this.wall();
        this.roof();
    }
    salary() {
        console.log(`цена работы ${this.cost}`);
    }
}
class House1 extends BuildTemplate {
    constructor(cost) {
        super(cost);
    }
    fundament() {
        console.log('Залили фундамент первого дома');
    }
    wall() {
        console.log('построили кирпичную стену');
    }
    roof() {
        console.log('накрыли шифером');
    }
}
class House2 extends BuildTemplate {
    constructor(cost) {
        super(cost);
    }
    fundament() {
        console.log('Залили фундамент второго дома');
    }
    wall() {
        console.log('построили шлакоблочную стену');
    }
    roof() {
        console.log('накрыли профнастилом');
    }
}
const house1 = new House1(20000);
const house2 = new House1(40000);
house1.build();
house1.salary();
console.log('');
house2.build();
house2.salary();
