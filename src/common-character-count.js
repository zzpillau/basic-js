/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const buildCharCountMap = (str) => {
    const charCountMap = {}
    str
      .split('')
      .forEach(el => {
        charCountMap[el] = (charCountMap[el] ?? 0) + 1
      })
    
    return charCountMap
  }

  const charCountMap_1 = buildCharCountMap(s1)
  const charCountMap_2 = buildCharCountMap(s2)

  const keys = Object.keys(charCountMap_1)

  const countCommonChars = keys.reduce((acc, char) => {
    if(charCountMap_2[char]) {
      return acc + Math.min(charCountMap_1[char], charCountMap_2[char])
    }
    return acc
  }, 0)

  return countCommonChars
}

module.exports = {
  getCommonCharacterCount
};
