class BlockNote {
    constructor(value) {
        this.value = value;
    }
}
const creator = {
    save: val => new BlockNote(val),
    restore: memento => memento.value
};
class Restore {
    constructor() {
        this.values = [];
    }
    add(value) {
        this.values.push(value);
    }
    get(index) {
        return this.values[index];
    }
}
const rest = new Restore();
rest.add(creator.save('hello'));
rest.add(creator.save('hello hello'));
rest.add(creator.save('hello world'));
console.log(creator.restore(rest.get(0)));
