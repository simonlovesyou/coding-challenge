import calculatePointDistance from '.'

describe('point-distance', () => {
  it('should calculate the distance correctly between two points', () => {
    expect(calculatePointDistance({x: 0, y: 0}, {x: 0, y: 0})).toBe(0)
    expect(calculatePointDistance({x: 1, y: 0}, {x: 0, y: 0})).toBe(1)
    expect(calculatePointDistance({x: 10, y: 0}, {x: 0, y: 0})).toBe(10)
    expect(calculatePointDistance({x: 1, y: 0}, {x: 4, y: 2})).toBe(5)
    expect(calculatePointDistance({x: 5, y: 0}, {x: 5, y: 10})).toBe(10)
    expect(calculatePointDistance({x: 14, y: 11}, {x: 6, y: 1})).toBe(18)
  })
})