import mapMatrix from 'map-matrix'

type Predicate<TReturnValue extends boolean, TValue = unknown> = (
  value: TValue,
  rowIndex: number,
  columnIndex: number
) => TReturnValue;

type Point = {
  x: number;
  y: number;
};

type Matrix<TValue = unknown> = TValue[][];

const filterMatrix = <TValue, TPredicate extends Predicate<boolean, TValue>>(
  predicate: TPredicate,
  matrix: Matrix<TValue>
): Point[] => {
  return mapMatrix(
    (value, rowIndex, columnIndex) => ({
      value: predicate(value, rowIndex, columnIndex),
      x: rowIndex,
      y: columnIndex,
    }),
    matrix
  )
    .flat(20)
    .filter((point) => point.value === true)
    .map(({ x, y }) => ({ x, y }))
}

export default filterMatrix