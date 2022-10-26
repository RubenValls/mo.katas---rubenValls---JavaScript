const Rover = require('../src/rover');


/*
Mars rover moves through


                       N
        --------------------------------
        |   0,2   |   1,2   |   2,2    |
        --------------------------------
    W   |   0,1   |   1,1   |   2,1    |    E
        --------------------------------
        |   0,0   |   1,0   |   2,0    |
        --------------------------------
                       S

*/

describe('Rover', () => {
  it('starts at a given position and orientation', () => {
    let rover = new Rover(0, 0, 'N')

    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.orientation).toEqual('N')
  })

  describe('facing north', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('N')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 1, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('turns left', () =>{
      let rover = new Rover(0, 0, 'N')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns right', () =>{
      let rover = new Rover(0, 0, 'N')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('wrapping edge forward', () =>{
      let rover = new Rover(0, 2, 'N')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('wrapping edge backward', () =>{
      let rover = new Rover(0, 0, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })
  });

  describe('facing south', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 1, 'S')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'S')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('S')
    })

    it('turns left', () =>{
      let rover = new Rover(0, 0, 'S')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns right', () =>{
      let rover = new Rover(0, 0, 'S')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('wrapping edge forward', () =>{
      let rover = new Rover(1, 0, 'S')

      rover.move(['f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('S')
    })

    it('wrapping edge backward', () =>{
      let rover = new Rover(2, 2, 'S')

      rover.move(['b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })
  });

  describe('facing east', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'E')

      rover.move(['f'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('moves backwards', () => {
      let rover = new Rover(1, 0, 'E')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })

    it('turns left', () =>{
      let rover = new Rover(0, 0, 'E')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('turns right', () =>{
      let rover = new Rover(0, 0, 'E')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })

    it('wrapping edge forward', () =>{
      let rover = new Rover(2, 1, 'E')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('E')
    })

    it('wrapping edge backward', () =>{
      let rover = new Rover(0, 0, 'E')

      rover.move(['b'])

      expect(rover.x).toEqual(2)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })
  })

  describe('facing west', () => {
    it('moves forwards', () => {
      let rover = new Rover(1, 0, 'W')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('moves backwards', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['b'])

      expect(rover.x).toEqual(1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('W')
    })

    it('turns left', () =>{
      let rover = new Rover(0, 0, 'W')

      rover.move(['l'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('S')
    })

    it('turns right', () =>{
      let rover = new Rover(0, 0, 'W')

      rover.move(['r'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('wrapping edge forward', () =>{
      let rover = new Rover(0, 2, 'W')

      rover.move(['f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('W')
    })

    it('wrapping edge backward', () =>{
      let rover = new Rover(2, 1, 'W')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(1)
      expect(rover.orientation).toEqual('W')
    })
  })

  describe('facing obstacles', () => {
    it('moves forwards to obstacle1', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['f','r','f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('moves forwards to obstacle2', () => {
      let rover = new Rover(0, 2, 'E')

      rover.move(['l','f','r', 'f', 'f', 'r', 'f'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('E')
    })

    it('moves backwards to obstacle1', () => {
      let rover = new Rover(0, 2, 'N')

      rover.move(['b','l','b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(2)
      expect(rover.orientation).toEqual('N')
    })

    it('moves backwards to obstacle2', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['b','l','b', 'b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })

    it('moves mixed to obstacle2', () => {
      let rover = new Rover(0, 0, 'N')

      rover.move(['f','f','l', 'b', 'b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('N')
    })
  })

})
