type ValueIterator<TReturnValue = unknown, TValueType = unknown> = (
  value: TValueType,
  rowIndex: number,
  columnIndex: number
) => TReturnValue;

type Matrix<TValue = unknown> = TValue[][];

const mapMatrix = <
  TValueType,
  // `any` instead of `unknown` used within constraint to please the compiler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TIterator extends ValueIterator<any, TValueType>
>(
    iterator: TIterator,
    matrix: Matrix<TValueType>
  ): Matrix<ReturnType<TIterator>> => {
  return matrix.map((row, rowIndex) =>
    row.map((value, columnIndex) => iterator(value, rowIndex, columnIndex))
  )
}

export default mapMatrix
