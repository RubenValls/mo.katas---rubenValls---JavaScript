class Rover {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.orientation = orientation
  }

  setOrientation(orientation){
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
      if (m === "l") {
        let orientation = turnLeft(this.orientation)
        this.setOrientation(orientation)
      }
      if (m === "r") {
        let orientation = turnRight(this.orientation)
        this.setOrientation(orientation)
      }
    })

    function turnLeft(orientation){
      if(orientation === "N"){
        orientation = "W"
      } else if(orientation === "W"){
        orientation = "S"
      } else if (orientation === "S"){
        orientation = "E"
      } else if(orientation === "E"){
        orientation = "N"
      }
      return orientation
    }

    function turnRight(orientation){
      if(orientation === "N"){
        orientation = "E"
      } else if(orientation === "E"){
        orientation = "S"
      } else if (orientation === "S"){
        orientation = "W"
      } else if (orientation === "W"){
        orientation = "N"
      }
      return orientation
    }
  }
}

module.exports = Rover
