const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  try {
    date.getTime()
  } catch {
    throw new Error('Invalid date!')
  }

  if (
    !(date instanceof Date) ||
    Object.prototype.toString.call(date) !== '[object Date]' ||
    isNaN(date.getTime())
  ) {
    throw new Error('Invalid date!')
  }


  const seasonList = {
    winter: [12, 1, 2],
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11]
  }

  const month = date.getMonth() + 1

  return Object.keys(seasonList).find(season =>
    seasonList[season].includes(month)
  )
}


module.exports = {
  getSeason
};
