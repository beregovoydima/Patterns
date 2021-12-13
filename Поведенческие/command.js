class MyMath {
    constructor(value = 0, item = 0) {
        this.number = value;
        this.num = item;
    }
    mult() {
        return Math.pow(this.number, this.num);
    }
    square() {
        return Math.sqrt(Math.pow(this.number, this.num));
    }
}
class Command {
    constructor(sub) {
        this.sub = sub;
        this.commands = [];
    }
    execute(command) {
        this.commands.push(command);
        return this.sub[command]();
    }
}
const x = new Command(new MyMath(2, 3));
const y = new Command(new MyMath(3, 4));
console.log(x.execute('mult'));
console.log(y.execute('mult'));
console.log(x.execute('square'));
console.log(y.execute('square'));
