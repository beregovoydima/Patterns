class Pilot {
    constructor(name = 'transport') {
        this.name = name;
        this.room = [];
    }
    say(item, say) {
        this.room.say(item, this, say);
    }
    receive(item, from) {
        console.log(`${this.name} to ${from.name} : ${item}`);
    }
}
class Dispatcher {
    constructor() {
        this.pilots = [];
    }
    register(pilot) {
        this.pilots[pilot.name] = pilot;
        pilot.room = this;
    }
    say(item, say, from) {
        say.receive(item, from);
    }
}
const plane = new Pilot('plane');
const gelicopter = new Pilot('gelicopter');
const rocket = new Pilot('rocket');
const room = new Dispatcher();
room.register(plane);
room.register(gelicopter);
room.register(rocket);
plane.say('hello', rocket);
gelicopter.say('good bye', plane);
