const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const validateSampleActivity = (sa) => {
    const activity = Number(sa);
    if (
      typeof sa !== 'string' ||
      isNaN(activity) ||
      activity <= 0 ||
      activity > MODERN_ACTIVITY
    ) {
      return false
    }
    return activity
  }

  const activity = validateSampleActivity(sampleActivity)

  if (activity !== false) {
    const k = Math.LN2 / HALF_LIFE_PERIOD;
    const age = Math.log(MODERN_ACTIVITY / activity) / k;
    return Math.ceil(age);
  }
    
  return false
}

module.exports = {
  dateSample
};
