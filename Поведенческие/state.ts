class Music {
 public name
 public nextSong
  constructor(name, nextSong) {
    this.name = name
    this.nextSong = nextSong
  }
  next(){
    return new this.nextSong()
  }
}

class FirstSong extends Music {
  constructor() {
    super('firstSong', SecondSong)
  }
}
class SecondSong extends Music {
  constructor() {
    super('secondSong', ThirdSong)
  }
}
class ThirdSong extends Music {
  constructor() {
    super('thirdSong', FirstSong)
  }
}

class Player {
  public song
  constructor() {
    this.song = new FirstSong()

    }
    nextSong(){
      this.song = this.song.next()
  }
}

const player = new Player()
console.log(player.song.name);

player.nextSong()
console.log(player.song.name);

player.nextSong()
console.log(player.song.name);

player.nextSong()
console.log(player.song.name);

player.nextSong()
console.log(player.song.name);

player.nextSong()
console.log(player.song.name);

