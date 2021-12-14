class People {
    constructor() {
        this.news = '';
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    delsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    setNews(text) {
        this.news = text;
        this.messenge();
    }
    messenge() {
        return this.observers.forEach(element => element.mess(this));
    }
}
class User1 {
    mess(message) {
        console.log(`User1 messenge: ${message.news}`);
    }
}
class User2 {
    mess(message) {
        console.log(`User2 messenge: ${message.news}`);
    }
}
const people = new People();
const user1 = new User1;
const user2 = new User2;
people.subscribe(user1);
people.subscribe(user2);
people.setNews('hello world');
console.log(people);
people.delsubscribe(user1);
console.log(people);
people.setNews('news2');
