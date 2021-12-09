class Person{
  private static _name: Person 
  login:string
  constructor(login:string){
    if(Person._name===null){
      return Person._name
    }
    Person._name = this
    this.login = login
  }

  getName():string{
    return this.login
  }
}

const user = new Person('123435546');
const user2 = new Person('hrtjhrthj');
console.log(user.getName());
