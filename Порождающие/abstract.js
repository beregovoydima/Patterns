class Car1 {
    constructor(name = 'BMW', color = "black") {
        this.name = name;
        this.color = color;
    }
}
class Car2 {
    constructor(name = 'Audi', color = "black", refregerator = true) {
        this.name = name;
        this.color = color;
        this.refregerator = refregerator;
    }
}
class Bus1 {
    constructor(name = 'BMW', color = "black", refregerator = true) {
        this.name = name;
        this.color = color;
        this.refregerator = refregerator;
    }
}
class Bus2 {
    constructor(name = 'BMW', color = "black", refregerator = true) {
        this.name = name;
        this.color = color;
        this.refregerator = refregerator;
    }
}
class FactureCar {
    createFirst(name, color, refregerator) {
        return new Car1(name, color);
    }
    createSecond(name, color, refregerator) {
        return new Car2(name, color, refregerator);
    }
}
class FactureBus {
    createFirst(name, color, refregerator) {
        return new Bus1(name, color, refregerator);
    }
    createSecond(name, color, refregerator) {
        return new Bus2(name, color, refregerator);
    }
}
class AbstractFactory {
    factorycreate(factory = 'factureCar') {
        const buy = AbstractFactory.AF[factory];
        const click = new buy();
        return click;
    }
}
AbstractFactory.AF = {
    factureCar: FactureCar,
    factureBus: FactureBus,
};
const absFactory = new AbstractFactory();
const download = [
    absFactory.factorycreate('factureCar').createFirst('lada', 'blue'),
    absFactory.factorycreate('factureCar').createSecond('zil', 'blue', true),
    absFactory.factorycreate('factureBus').createFirst('mersedes', 'blue', false),
    absFactory.factorycreate('factureBus').createSecond('opel', 'blue'),
    absFactory.factorycreate('factureBus').createSecond(),
];
download.forEach(m => {
    return console.log(m);
});
