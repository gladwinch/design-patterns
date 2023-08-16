const Store = require('./Store')
const inventory = require('./inventory.json')

const skiShop = new Store('Steep and deep', inventory)

const searchItem = 'wax'
const result = skiShop.find(searchItem)

console.log(result)