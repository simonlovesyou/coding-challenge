import createDistanceMap from '.'

describe('', () => {
  it('should output the correct distance map for the matrix', () => {
    const matrix = [[0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 0]]
    const result = createDistanceMap(matrix)
    expect(result).toStrictEqual([[3, 2, 1, 0], [2, 1, 0 ,0], [1, 0, 0, 1]])
  })
})