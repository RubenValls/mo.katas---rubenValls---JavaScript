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

  getX(){
    return this.x
  }

  getY(){
    return this.y
  }

  getOrientacion(){
    return this.orientation
  }

  move(movs) {
    const min = 0
    const max = 3
    const firstObstacle = [getRandomArbitrary(min, max), getRandomArbitrary(min, max)]
    const secondObstacle = [getRandomArbitrary(min, max), getRandomArbitrary(min, max)]
    movs.forEach(m => {
      let newPositions
      if(m === "f"){
        newPositions = checkBorderForward(this.x,this.y,this.orientation)
        let obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
        if (obstacleDetection){
          this.setX(0)
          this.setY(0)
          this.setOrientation("N")
        }else if(this.orientation === "N"){
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y + 1)
          }
        }else if(this.orientation === "S"){
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y - 1)
          }
        }else if(this.orientation === "E"){
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
        newPositions = checkBorderBackward(this.x,this.y,this.orientation)
        if(this.orientation === "N"){
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y - 1)
          }
        }else if(this.orientation === "S"){
          if (newPositions[1] != this.y){
            this.setY(newPositions[1])
          }else{
            this.setY(this.y + 1)
          }
        }else if(this.orientation === "E"){
          if (newPositions[0] != this.x){
            this.setX(newPositions[0])
          }else{
            this.setX(this.x - 1)
          }
        }else if(this.orientation === "W"){
          if (newPositions[0] != this.x){
            this.setX(newPositions[0])
          }else{
            this.setX(this.x + 1)
          }
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

    function checkBorderBackward(x,y,orientation){
      let position = [x,y,orientation]
      if (x == 0 && orientation === "E"){
        position[0] = 2
      } else if (y == 2 && orientation === "S"){
        position[1] = 0
      } else if (x == 2 && orientation === "W"){
        position[0] = 0
      } else if (y == 0 && orientation === "N"){
        position[1] = 2
      }
      return position
    }

    function checkObstacles(obstacle1, obstacle2, position){
      if(obstacle1[0] == position[0] && obstacle1[1] == position[1] || obstacle2[0] == position[0] && obstacle2[1] == position[1]){
        return true;
      }else{
        return false
      }
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

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  }
}

module.exports = Rover
