class Human {
    constructor(name = 'who is it?') {
        this.name = name;
    }
    get Name() {
        return this.name;
    }
    set Name(value) {
        this.name = value;
    }
    say() {
        console.log(`my name is ${this.name}`);
    }
}
class Work extends Human {
    constructor(name, worker = 'nonWork') {
        super(name);
        this.worker = 'nonwork';
        this.worker = worker;
    }
    get Work() {
        return this.worker;
    }
    set Work(value) {
        this.worker = value;
    }
    workSay() {
        console.log(`my name is ${this.name} and my work is ${this.worker}`);
    }
}
class WorkLevel extends Work {
    constructor(name, worker = 'NonWork', level = 0) {
        super(name, worker);
        this.level = level;
    }
    get Level() {
        return this.level;
    }
    set Level(value) {
        if (value < 0) {
            this.level = 0;
        }
        else {
            this.level = value;
        }
    }
    workLevelsay() {
        console.log(`my name is ${this.name} and my work is ${this.worker} have level ${this.level}`);
    }
}
const people = new Human('Vasia');
const people2 = new Human();
const work = new Work('Grisha');
const work2 = new Work('Grisha', 'elektrik');
const workLevel = new WorkLevel('Bogdan');
const workLevel2 = new WorkLevel('Bogdan', 'IT', 3);
console.log(people);
console.log(people2);
console.log(work);
console.log(work2);
console.log(workLevel);
console.log(workLevel2);
people.say();
work.workSay();
workLevel2.workLevelsay();
