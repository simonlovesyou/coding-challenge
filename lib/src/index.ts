import filterMatrix from 'filter-matrix'
import createMatrix from 'create-matrix'
import mapMatrix from 'map-matrix'
import calculatePointDistance from 'point-distance'
import mergeMatricesBy from 'merge-matrices'

type Matrix<TValue = unknown> = TValue[][];

enum Pixel {
  BLACK = 0,
  WHITE = 1
}

const isWhitePixel = (pixel: Pixel) : pixel is Pixel.WHITE => pixel === 1

const createDistanceMap = (matrix: Matrix<Pixel.BLACK | Pixel.WHITE>) => {
  const whitePixelPositions = filterMatrix(isWhitePixel, matrix)
  
  const distanceMaps = whitePixelPositions.map((whitePixel => {
    const matrixWidth = matrix[0].length
    const matrixHeight = matrix.length

    const emptyMatrixCopy = createMatrix(matrixWidth, matrixHeight, 0)

    const distanceMap = mapMatrix((value_, rowIndex, columnIndex) => calculatePointDistance({x: rowIndex, y: columnIndex}, whitePixel), emptyMatrixCopy)

    return distanceMap
  }))

  return distanceMaps.reduce((matrixA, matrixB) => mergeMatricesBy(Math.min, matrixA, matrixB))
}

export default createDistanceMap