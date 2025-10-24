/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    if (!this.chain) {
      return 0
    }
    return this.chain.length
  },
  
  addLink(value) {
    if (!this.chain) {
      this.chain = []
    }
    this.chain.push(value)
    return this
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }

    this.chain = this.chain.filter((_, i) => i + 1 !== position)
    return this
  },

  reverseChain() {
    if (!this.chain) {
      return this
    }
    this.chain = this.chain.reverse()
    return this
  },

  finishChain() {
    const linked = this.chain.map(link => `( ${link} )`)
    this.chain = []
    return linked.join('~~')
  }
};

module.exports = {
  chainMaker,
};
