import createMatrix from '.'

describe('create-matrix', () => {
  it('should return a matrix with the given size', () => {
    expect(createMatrix(2, 2, 0)).toStrictEqual([[0, 0], [0, 0]])
    expect(createMatrix(2, 3, 'A')).toStrictEqual([['A', 'A'], ['A', 'A'], ['A', 'A']])
    expect(createMatrix(1, 3, 'B')).toStrictEqual([['B'], ['B'], ['B']])
  })
})