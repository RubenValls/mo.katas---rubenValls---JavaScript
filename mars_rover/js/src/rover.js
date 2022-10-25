class Rover {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.orientation = orientation

    function turnLeft(){
      if(this.orientation === "N"){
        this.orientation = "W"
      } else if(this.orientation === "W"){
        this.orientation = "S"
      } else if (this.orientation = "S"){
        this.orientation = "E"
      } else{
        this.orientation = "N"
      }
    }

    function turnRight(){
      if(this.orientation === "N"){
        this.orientation = "E"
      } else if(this.orientation === "E"){
        this.orientation = "S"
      } else if (this.orientation = "S"){
        this.orientation = "W"
      } else{
        this.orientation = "N"
      }
    }
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
      if (m === "l") {
        turnLeft()
      }
      if (m === "r") {
        turnRight()
      }
    })
  }
}

module.exports = Rover
