/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesMap = {}
  const output = []

  names.forEach(name => {
    namesMap[name] = namesMap[name] === undefined
      ? 0
      : namesMap[name] += 1

    const nameToOutput = namesMap[name] === 0
      ? name
      : `${name}(${namesMap[name]})`

      namesMap[nameToOutput] = 0

      output.push(nameToOutput)
  })

  return output
}

module.exports = {
  renameFiles
};
