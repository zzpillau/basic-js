/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const CAT_EARS = '^^'
  return matrix.reduce((acc, row) => {
    const catEars = row.filter(el => el === CAT_EARS)
    return acc + catEars.length
  }, 0)
}

module.exports = {
  countCats
};
