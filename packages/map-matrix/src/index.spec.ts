import mapMatrix from "."

describe('map-matrix', () => {
  it('should call the iterator function with each element and its position', () => {
    const matrix = [['A', 'B'], ['C', 'D']]

    const iterator = jest.fn()

    mapMatrix(iterator, matrix)

    expect(iterator).toHaveBeenNthCalledWith(1, 'A', 0, 0)
    expect(iterator).toHaveBeenNthCalledWith(2, 'B', 0, 1)
    expect(iterator).toHaveBeenNthCalledWith(3, 'C', 1, 0)
    expect(iterator).toHaveBeenNthCalledWith(4, 'D', 1, 1)
  })
  it('should replace each element with the return value of the iterator', () => {
    const matrix = [['A', 'B'], ['C', 'D']]

    const element = Symbol('element')

    const result = mapMatrix(() => element, matrix)

    expect(result).toStrictEqual([[element, element], [element, element]])
  })
})