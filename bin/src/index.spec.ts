import dedent from 'ts-dedent'
import { AssertionError } from 'node:assert'
import {parseBufferedTestCases, formatTestResults} from '.'

describe('bin', () => {
  describe('parseBufferedTestCases', () => {
    describe('valid input', () => {
      const numberOfTestCases = 1
      const dimensions = [3, 4]
      const data = [[3, 2, 1, 0], [2, 1, 0 ,0], [1, 0, 0, 1]].map(row => row.join(''))
      
      const inputArgument = [numberOfTestCases, dimensions.join(' '), ...data].map(line => String(line)).flat(Number.POSITIVE_INFINITY)
      
      it('should not throw', () => {
        expect(() => parseBufferedTestCases(inputArgument)).not.toThrow()
      })

      it('should output the correct results', () => {
        const result = parseBufferedTestCases(inputArgument)
        expect(result).toStrictEqual([[[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]]])
      })
    })
    describe('invalid input (missing test case/s)', () => {
      const numberOfTestCases = 2
      const dimensions = [3, 4]
      const data = [[3, 2, 1, 0], [2, 1, 0 ,0], [1, 0, 0, 1]].map(row => row.join(''))
      
      const inputArgument = [numberOfTestCases, dimensions.join(' '), ...data].map(line => String(line)).flat(Number.POSITIVE_INFINITY)
      
      it('should throw', () => {
        expect(() => parseBufferedTestCases(inputArgument)).toThrow(new AssertionError({message: 'Malformed input: Expected 2 test cases, but only received 1 test cases.'}))
      })
    })
  })
  describe('formatTestResults', () => {
    const testResults = [[3, 2, 1, 0], [2, 1, 0, 0], [1, 0, 0, 1]]
    it('should correctly format the test results', () => {
      expect(formatTestResults(testResults)).toStrictEqual(dedent`
        3 2 1 0
        2 1 0 0
        1 0 0 1
      `)
    })
  })
})
