const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digitTokens = n.toString().split('')
  const bypass = digitTokens.map((el, i, arr) => {
      const others = arr.filter((el, j) => j !== i)
      const num = Number(others.join(''))
      return num
    }
  )
  return Math.max(...bypass)
}

module.exports = {
  deleteDigit
};
