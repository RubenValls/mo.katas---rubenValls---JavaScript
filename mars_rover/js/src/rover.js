class Rover {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.orientation = orientation
  }

  setX(x){
    this.x = x;
  }

  setY(y){
    this.y = y;
  }

  setOrientation(orientation){
    this.orientation = orientation
  }

  move(movs) {
    movs.forEach(m => {
      if(m === "f"){
        if(this.orientation === "N"){
          let newPositions = checkBorderForward(this.x,this.y,this.orientation)
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y + 1)
          }
        }else if(this.orientation === "S"){
          let newPositions = checkBorderForward(this.x,this.y,this.orientation)
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y - 1)
          }
        }else if(this.orientation === "E"){
          let newPositions = checkBorderForward(this.x,this.y,this.orientation)
          if (newPositions[0] != this.x){
            this.setX(newPositions[0])
          }else{
            this.setX(this.x + 1)
          }
        }else if(this.orientation === "W"){
          let newPositions = checkBorderForward(this.x,this.y,this.orientation)
          if (newPositions[0] != this.x){
            this.setX(newPositions[0])
          }else{
            this.setX(this.x - 1)
          }
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

    function checkBorderForward(x,y,orientation){
      let position = [x,y,orientation]
      if (x == 0 && orientation === "W"){
        position[0] = 2
      } else if (y == 2 && orientation === "N"){
        position[1] = 0
      } else if (x == 2 && orientation === "E"){
        position[0] = 0
      } else if (y == 0 && orientation === "S"){
        position[1] = 2
      }
      return position
    }

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
