class Home {
  doors:number
  window:number
  wall:string
  pool:boolean
  constructor() {
    this.doors=0
    this.window=0
    this.wall=''
    this.pool=false
  }
}

interface Builder{
  numberOfDoors()
  numberOfWindow()
  wallType()
  havePool()
  build()
}

class MyBuilder implements Builder {
  home:any
  constructor() {
    this.home = new Home
  }

  numberOfDoors(doors = 1){
    if(doors>1){
      this.home.doors = doors
      return this
    } else{
      this.home.doors = 1
      return this
    }
  }
  numberOfWindow(window = 1){
    if(window>1){
      this.home.window = window
      return this
    } else{
      this.home.window = 1
      return this
    }
  }
  
  wallType(wall = ''){
    this.home.wall = wall
    return this
  }
  havePool(pool=false){
    this.home.pool = pool
    return this
  }

  build(){
    return this.home
  }
}

const myHome = new MyBuilder().numberOfDoors(4).numberOfWindow(1).wallType('brick').havePool(true)
const myHome2 = new MyBuilder().numberOfDoors(6).numberOfWindow(1).wallType('brick').havePool()
const myHome3 = new MyBuilder().numberOfDoors(0).numberOfWindow(1).wallType().havePool()
console.log(myHome);
console.log(myHome2);
console.log(myHome3);
