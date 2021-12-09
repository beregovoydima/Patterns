class Figure {
  type:any
  constructor(type) {
    this.type = type
  }
}

class Color {
  style:any
  constructor(style) {
    this.style = style
  }
  get(){
    return this.style
  }
}

class Triangle extends Figure {
  constructor(type) {
    super(type)
  }

  color(){
    return `triangle with color ${this.type.get()}`
  }
}
class Circle extends Figure {
  constructor(type) {
    super(type)
  }

  color(){
    return `circle with color ${this.type.get()}`
  }
}

class Red extends Color {
  constructor() {
    super('red')
  }
}
class Blue extends Color {
  constructor() {
    super('blue')
  }
}

const item1 = new Triangle(new Red())
const item2 = new Circle(new Blue())

console.log(item1.color());
console.log(item2.color());
