class Person {
    constructor(login) {
        if (Person._name === null) {
            return Person._name;
        }
        Person._name = this;
        this.login = login;
    }
    getName() {
        return this.login;
    }
}
const user = new Person('123435546');
const user2 = new Person('hrtjhrthj');
console.log(user.getName());
