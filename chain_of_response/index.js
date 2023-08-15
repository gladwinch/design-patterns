const Store = require('./Store')
const inventory = require('./inventory.json')

const skiShop = new Store('Steep and deep', inventory.floor)

const searchItem = 'ski hats'
const result = skiShop.find(searchItem)

console.log(result)