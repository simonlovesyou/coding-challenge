import filterMatrix from '.'

describe('filter-matrix', () => {
  it('should call the iterator function with each element and its position', () => {
    const matrix = [['A', 'B'], ['C', 'D']]

    const iterator = jest.fn()

    filterMatrix(iterator, matrix)

    expect(iterator).toHaveBeenNthCalledWith(1, 'A', 0, 0)
    expect(iterator).toHaveBeenNthCalledWith(2, 'B', 0, 1)
    expect(iterator).toHaveBeenNthCalledWith(3, 'C', 1, 0)
    expect(iterator).toHaveBeenNthCalledWith(4, 'D', 1, 1)
  })
  it('should return all points when predicate always returns true', () => {
    const matrix = [['A', 'B'], ['C', 'D']]

    const predicate = () => true

    const result = filterMatrix(predicate, matrix)

    expect(result).toStrictEqual( [ { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 } ])
  })
  it('should return a subset of points when predicate returns true for that element', () => {
    const matrix = [['A', 'B'], ['C', 'D']]

    const predicate = (element: string) => element === 'A'

    const result = filterMatrix(predicate, matrix)

    expect(result).toStrictEqual( [ { x: 0, y: 0 }])
  })
})