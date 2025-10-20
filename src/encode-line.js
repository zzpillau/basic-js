const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const state = {
    currentCharCount: 0,
    currentChar: '',
    result: ''
  }

  str
    .split('')
    .forEach((char, i, arr) => {
      state.currentChar = char
      state.currentCharCount += 1

      if (arr[i + 1] !== state.currentChar) {
        state.result = `${state.result}${state.currentCharCount > 1 ? state.currentCharCount : ''}${state.currentChar}`
        state.currentCharCount = 0
        state.currentChar = ''
      }
    })

  return state.result
}

module.exports = {
  encodeLine
};
