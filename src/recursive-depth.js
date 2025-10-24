const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1

      arr.forEach(el => {
        if(Array.isArray(el)) {
          maxDepth = Math.max(maxDepth, 1 + this.calculateDepth(el))
        }
      })

    return maxDepth
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
