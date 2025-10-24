const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine()
 * 
 * const reverseMachine = new VigenereCipheringMachine(false)
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  #A_CODE = 65
  #ALPHABET_LENGTH = 26

  constructor(isDirect = true) {
    this.isDirect = isDirect
  }

  #validateArgs(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
  }

  #normalizeInput(message, key) {
    const normMessage = message.toUpperCase().replace(/[^A-Z]/g, '')
    const normKey = key.toUpperCase()
    return {
      message: normMessage,
      key: normKey.padEnd(normMessage.length, normKey)
    }
  }

  #shiftChar(m, k, direction = 'encrypt') {
    const shift = direction === 'encrypt'
      ? (m + k) % this.#ALPHABET_LENGTH
      : (m - k + this.#ALPHABET_LENGTH) % this.#ALPHABET_LENGTH

    return String.fromCharCode(shift + this.#A_CODE)
  }

  #reconstruct(message, letters) {
    let index = 0
    return message
      .split('')
      .map(char => /[A-Z]/i.test(char) ? letters[index++] : char)
  }

  encrypt(message, key) {
    this.#validateArgs(message, key)
    const { message: cleanMessage, key: expandedKey } = this.#normalizeInput(message, key)

    const encryptedLetters = cleanMessage
      .split('')
      .map((char, i) => this.#shiftChar(
        char.charCodeAt(0) - this.#A_CODE,
        expandedKey[i].charCodeAt(0) - this.#A_CODE,
        'encrypt'
      ))

    const directMessage = this.#reconstruct(message, encryptedLetters)
    return this.isDirect ? directMessage.join('') : directMessage.reverse().join('')
  }

  decrypt(message, key) {
    this.#validateArgs(message, key)
    const { message: cleanMessage, key: expandedKey } = this.#normalizeInput(message, key)

    const decryptedLetters = cleanMessage
      .split('')
      .map((char, i) => this.#shiftChar(
        char.charCodeAt(0) - this.#A_CODE,
        expandedKey[i].charCodeAt(0) - this.#A_CODE,
        'decrypt'
      ))

    const directMessage = this.#reconstruct(message, decryptedLetters)
    return this.isDirect ? directMessage.join('') : directMessage.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
}
