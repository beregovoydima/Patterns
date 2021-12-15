class Figure{
  figure(item){
    item(this)
  }
}
class Triangle extends Figure {
  about(){
    return 'its a green triangle'
  }
}
class Square extends Figure{
  about(){
    return 'its a red square'
  }
}
class Cube extends Figure{
  about(){
    return 'its a red square'
  }
}

const visit = (figure)=>{
  figure = console.log(`export ${figure.about()}`);
}

const triangle = new Triangle()
const square = new Square()
const cube = new Cube()

triangle.figure(visit);
square.figure(visit);
cube.figure(visit);