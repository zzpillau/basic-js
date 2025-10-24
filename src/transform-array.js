/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const result = []
  let skipMe = false

  arr.forEach((el, i) => {
    if (skipMe) {
      skipMe = false
      return
    }

    if (el === '--discard-next') {
      skipMe = true
      return
    }

    if (el === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        result.pop()
      }
      return
    }

    if (el === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1])
      }
      return
    }

    if (el === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        result.push(arr[i - 1])
      }
      return
    }

    result.push(el)
  })

  return result
}

module.exports = {
  transform
};
