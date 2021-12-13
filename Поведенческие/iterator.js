class Figure {
    constructor(figure) {
        this.index = 0;
        this.figure = figure;
    }
    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.figure.length) {
                    return {
                        value: this.figure[this.index++],
                        done: false,
                    };
                }
                else {
                    this.index = 0;
                    return {
                        done: true,
                    };
                }
            },
        };
    }
}
const collection = new Figure(["triangle", "squad", "circle"]);
for (const i of collection) {
    console.log("figure", i);
}
