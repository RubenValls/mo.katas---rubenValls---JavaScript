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
      let rover = new Rover(0, 0, 'N')

      rover.move(['b'])

      expect(rover.x).toEqual(0)
      expect(rover.y).toEqual(-1)
      expect(rover.orientation).toEqual('N')
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
      let rover = new Rover(0, 0, 'E')

      rover.move(['b'])

      expect(rover.x).toEqual(-1)
      expect(rover.y).toEqual(0)
      expect(rover.orientation).toEqual('E')
    })
  })

  describe('facing west', () => {
    it('moves forwards', () => {
      let rover = new Rover(0, 0, 'W')

      rover.move(['f'])

      expect(rover.x).toEqual(-1)
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
  })
})
