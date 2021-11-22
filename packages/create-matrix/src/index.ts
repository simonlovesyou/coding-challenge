type Matrix<TValue> = TValue[][];

const createMatrix = <TValue>(
  width: number,
  height: number,
  fillValue: TValue
): Matrix<TValue> => {
  const columns = Array.from<[undefined]>({ length: height}).fill([undefined])
  const filledColumns = columns.map(() => Array.from<TValue>({length: width}).fill(fillValue))
  return filledColumns
}

export default createMatrix