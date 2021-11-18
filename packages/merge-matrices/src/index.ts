import mapMatrix from '../../map-matrix/src'

type MatrixMergeFunction<TValueA, TValueB, TReturnValue> = (
  valueA: TValueA,
  valueB: TValueB
) => TReturnValue;

type Matrix<TValue = unknown> = TValue[][];

const mergeMatricesBy = <
  TValueA,
  TValueB,
  TMergeFunction extends MatrixMergeFunction<TValueA, TValueB, any>
>(
    mergeFunction: TMergeFunction,
    matrixA: Matrix<TValueA>,
    matrixB: Matrix<TValueB>
  ): Matrix<ReturnType<TMergeFunction>> => {
  return mapMatrix((a: TValueA, rowIndex, columnIndex) => {
    const correspondingMatrixValue: TValueB = matrixB[rowIndex][columnIndex]
    return mergeFunction(a, correspondingMatrixValue)
  }, matrixA)
}

export default mergeMatricesBy