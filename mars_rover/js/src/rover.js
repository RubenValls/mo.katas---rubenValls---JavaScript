class Rover {
  constructor(x, y, orientation) {
    this.x = x
    this.y = y
    this.orientation = orientation
  }

  move(movs) {

    const initialLocation = [this.getX(), this.getY(), this.getOrientation()]
    const firstObstacle = [1, 1]
    const secondObstacle = [2, 2]
    let obstacleFinded
    let newPositions
    let obstacleDetection
    let newX
    let newY

    movs.forEach(m => {
      //Forward movement
      if(m === "f"){
        newPositions = checkBorderForward(this.x,this.y,this.orientation)
        obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
        if (obstacleDetection){
          this.setCompletePosition(initialLocation[0], initialLocation[1], initialLocation[2])
        }else{
          switch(this.orientation){
            //Forward north movement
            case "N":
              if (newPositions[1] != this.y){
                this.setY(newPositions[1])
                break;
              }else{
                newY = this.y + 1
                newPositions = [this.getX(), newY, this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;            
                }else{
                  this.setY(newY)
                  break;
                }
              }
            //Forward south movement
            case "S":
              if (newPositions[1] != this.y){
                this.setY(newPositions[1])
                break;
              }else{
                newY = this.y - 1
                newPositions = [this.getX(), newY, this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;             
                }else{
                  this.setY(newY)
                  break;
                }
              }
            //Forward east movement
            case "E":
              if (newPositions[0] != this.x){
                this.setX(newPositions[0])
                break;
              }else{
                newX = this.x + 1
                newPositions = [newX, this.getY(), this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;            
                }else{
                  this.setX(newX)
                  break;
                }
              }
            //Forward west movement
            case "W":
              if (newPositions[0] != this.x){
                this.setX(newPositions[0])
                break;
              }else{
                newX = this.x - 1
                newPositions = [newX, this.getY(), this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;             
                }else{
                  this.setX(newX)
                  break;
                }
              }
          }  
        }
      }
      //Backward movement
      if (m === "b") {
        newPositions = checkBorderBackward(this.x,this.y,this.orientation)
        obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
        if (obstacleDetection){
          this.setCompletePosition(initialLocation[0], initialLocation[1], initialLocation[2])
        }else{
          switch(this.orientation){
            //Backward north movement
            case "N":
              if (newPositions[1] != this.y){
                this.setY(newPositions[1])
                break;
              }else{
                newY = this.y - 1
                newPositions = [this.getX(), newY, this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;            
                }else{
                  this.setY(newY)
                  break;
                }
              }
            //Backward south movement
              case "S":
              if (newPositions[1] != this.y){
                this.setY(newPositions[1])
                break;
              }else{
                newY = this.y + 1
                newPositions = [this.getX(), newY, this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)
                  break;             
                }else{
                  this.setY(newY)
                  break;
                }
              }
            //Backward east movement
            case "E":
              if (newPositions[0] != this.x){
                this.setX(newPositions[0])
                break;
              }else{
                newX = this.x - 1
                newPositions = [newX, this.getY(), this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions) 
                  break;             
                }else{
                  this.setX(newX)
                  break;
                }
              }
            //Backward west movement
            case "W":
              if (newPositions[0] != this.x){
                this.setX(newPositions[0])
                break;
              }else{
                newX = this.x + 1
                newPositions = [newX, this.getY(), this.getOrientation()]
                obstacleDetection = checkObstacles(firstObstacle, secondObstacle, newPositions)
                if(obstacleDetection == true){
                  obstacleFinded = this.obstacleFinded(initialLocation, newPositions)   
                  break;          
                }else{
                  this.setX(newX)
                  break;
                }
              }
          }
        } 
      }
      //Turn left
      if (m === "l") {
        this.turnLeft()
      }
      //Turn right
      if (m === "r") {
        this.turnRight()
      }
    })

    //Check if there are borders moving forward
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

    //Check if there are borders moving backward
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

    //Check if the position is the same as an obstacle
    function checkObstacles(obstacle1, obstacle2, position){
      if(obstacle1[0] == position[0] && obstacle1[1] == position[1] || obstacle2[0] == position[0] && obstacle2[1] == position[1]){
        return true;
      }else{
        return false
      }
    }
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

  setCompletePosition(x,y,orientation){
    this.x = x
    this.y = y
    this.orientation = orientation
  }

  //Find an obstacle and set the original location and return obstacle's position
  obstacleFinded(initialLocation, newPositions){
    this.setCompletePosition(initialLocation[0], initialLocation[1], initialLocation[2])
    let obstaclePosition = newPositions
    return obstaclePosition 
  }

  getX(){
    return this.x
  }

  getY(){
    return this.y
  }

  getOrientation(){
    return this.orientation
  }

  turnRight(){
    if(this.orientation === "N"){
      this.orientation = "E"
    } else if(this.orientation === "E"){
      this.orientation = "S"
    } else if (this.orientation === "S"){
      this.orientation = "W"
    } else if (this.orientation === "W"){
      this.orientation = "N"
    }
  }

  turnLeft(){
    if(this.orientation === "N"){
      this.orientation = "W"
    } else if(this.orientation === "W"){
      this.orientation = "S"
    } else if (this.orientation === "S"){
      this.orientation = "E"
    } else if(this.orientation === "E"){
      this.orientation = "N"
    }
  }
}

module.exports = Rover
