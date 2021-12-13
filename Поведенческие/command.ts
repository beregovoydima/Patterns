interface Commands{
  execute(value)
}
class MyMath {
number:number
num:number
  constructor(value:number = 0, item:number =0) {
    this.number = value
    this.num = item
  }
  mult(){
    return this.number**this.num
  }
  square(){
    return Math.sqrt(this.number**this.num)
  }
}

class Command implements Commands {
  sub: any
  commands:any
  constructor(sub) {
    this.sub=sub
    this.commands =[]
  }
  execute(command){
    this.commands.push(command)
    return this.sub[command]()
  }
}

const x = new Command( new MyMath(2,3))
const y = new Command( new MyMath(3,4))
console.log(x.execute('mult'));
console.log(y.execute('mult'));
console.log(x.execute('square'));
console.log(y.execute('square'));

