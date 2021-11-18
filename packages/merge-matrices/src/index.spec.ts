import mergeMatricesBy from '.'

describe('merge-matrices', () => {
  it('should call the iterator function with each element in both matrices', () => {
    const matrixA = [['A', 'B'], ['C', 'D']]
    const matrixB = [['E', 'F'], ['G', 'H']]

    const mergeFunction = jest.fn()

    mergeMatricesBy(mergeFunction, matrixA, matrixB)

    expect(mergeFunction).toHaveBeenNthCalledWith(1, 'A', 'E')
    expect(mergeFunction).toHaveBeenNthCalledWith(2, 'B', 'F')
    expect(mergeFunction).toHaveBeenNthCalledWith(3, 'C', 'G')
    expect(mergeFunction).toHaveBeenNthCalledWith(4, 'D', 'H')
  })
  it('should merge two matrices by some function', () => {
    const matrixA = [[5, 1], [8, 3]]
    const matrixB = [[4, 5], [6, 7]]

    const mergeFunction = Math.max

    const result = mergeMatricesBy(mergeFunction, matrixA, matrixB)

    expect(result).toStrictEqual([[5, 5], [8, 7]])
  })
})