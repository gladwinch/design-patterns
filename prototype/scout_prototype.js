const Shopper = require('./Shopper')

const scout = new Shopper()
scout.addItemToList('bag')
scout.addItemToList('pen')
scout.addItemToList('shirt')

module.exports = scout