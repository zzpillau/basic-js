const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, row, i, matrix) => {

    const rowSum = row.reduce((acc, el, j) => {
      if (matrix[i-1] && matrix[i-1][j] === 0) {
        return acc
      }

      return acc + el
    }, 0)

    return acc + rowSum
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};

