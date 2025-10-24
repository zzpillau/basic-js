const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowsCount = matrix.length
  const cellsCount = matrix[0].length

  const field = Array.from({length: rowsCount}, () => Array.from({length: cellsCount}, () => 0))

  matrix.forEach((row, i) => {
    row.forEach((cell, j) => {

      if (cell === true) {
        const hasTop = i > 0
        const hasBottom = i < (matrix.length - 1)
        const hasRight = j < (row.length - 1)
        const hasLeft = j > 0

        hasTop && (field[i - 1][j] += 1 )

        hasBottom && (field[i + 1][j] += 1)

        hasRight && (field[i][j + 1] += 1)

        hasLeft && (field[i][j - 1] += 1)

        hasTop && hasRight && (field[i - 1][j + 1] += 1)

        hasTop && hasLeft && (field[i - 1][j - 1] += 1)

        hasBottom && hasRight && (field[i + 1][j + 1] += 1)

        hasBottom && hasLeft && (field[i + 1][j - 1] += 1)
      }
    })
  })

  return field
}

module.exports = {
  minesweeper
};

