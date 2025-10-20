const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainMap = {}

  domains.forEach(domain => {
    const domainLevels = domain.split('.').reverse()
    domainLevels.reduce((acc, level) => {
      const newLevel = [acc, level].join('.')
      domainMap[newLevel] = (domainMap[newLevel] ?? 0) + 1
      return newLevel
    }, '')

  })
  
  return domainMap
}

module.exports = {
  getDNSStats
};
