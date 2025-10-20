const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options

  const buildStr = (str, times, sep) => {
    return Array(times).fill(str).join(sep)
  }

  const additionStr  = buildStr(String(addition), additionRepeatTimes, additionSeparator)
  const fullStr  = buildStr(String(str) + additionStr , repeatTimes, separator)

  return fullStr 
}

module.exports = {
  repeater
};
