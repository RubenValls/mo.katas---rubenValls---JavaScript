class Rover {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.orientation = orientation
  }

  move(movs) {
    movs.forEach(m => {
      if(m === "f"){
        if(this.orientation === "N"){
          this.y = this.y + 1
        }else if(this.orientation === "S"){
          this.y = this.y - 1
        }else if(this.orientation === "E"){
          this.x = this.x + 1
        }else if(this.orientation === "W"){
          this.x = this.x - 1
        }
      }
      if (m === "b") {
        if(this.orientation === "N"){
          this.y = this.y - 1
        }else if(this.orientation === "S"){
          this.y = this.y + 1
        }else if(this.orientation === "E"){
          this.x = this.x - 1
        }else if(this.orientation === "W"){
          this.x = this.x + 1
        }
      }
    })
  }
}

module.exports = Rover
