#!/usr/bin/env node
import through from 'through'
import assert, { AssertionError } from 'node:assert'
import createDistanceMap from 'lib'

const inputStore: string[] = []

const NEWLINES_BETWEEN_TESTS = 1

type Matrix = number[][]

export const parseBufferedTestCases = (stdio: string[]): Matrix[] => {
  const [numberOfTestCases, ...testData] = stdio
  const testCases = []

  for(let index = 0; index < testData.length;) {
    const dimensions = testData[index]

    const height = Number(dimensions.split(' ')[0])
    
    const matrix = []

    for(let testLineCursor = 1; testLineCursor <= height; testLineCursor++) {
      const row = testData[testLineCursor + index]
      matrix.push([...row].map(cell => Number(cell)))
    }
    testCases.push(matrix)
    index = index + height + NEWLINES_BETWEEN_TESTS + 1
  }
  
  assert.equal(numberOfTestCases, testCases.length, `Malformed input: Expected ${numberOfTestCases} test cases, but only received ${testCases.length} test cases.`)

  return testCases
}

export const formatTestResults = (resultMatrix: Matrix) => {
  return resultMatrix.map(row => row.join(' ')).join('\n')
}
process.env.NODE_ENV !== 'test' && process.stdin.pipe(through((buffer: Buffer) => {
  inputStore.push(...buffer.toString().split('\n'))
}, () => {
  try {
    const testCases = parseBufferedTestCases(inputStore)

    const results = testCases.map(testCaseMatrix => createDistanceMap(testCaseMatrix))

    const formattedResults = results.map(result => formatTestResults(result))
    for (const [index, testResult] of formattedResults.entries()) {
      process.stdout.write(testResult)
      if(index < formattedResults.length - 1) {
        process.stdout.write('\n\n')
      }
    }
    console.log()
  } catch (error) {
    if(error instanceof AssertionError) {
      console.error(error.message)
    }
    process.exit(1)
  }
}))

