const CatelogItem = require('./CatelogItem')
const CatalogGroup = require('./CatelogItem')

const boots = new CatelogItem("Leather Boots", 79.99)
const sneakers = new CatelogItem("Kicks", 39.99)
const flipFlops = new CatelogItem("California wook boots", 19.99)

const group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops])
const group_food = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops])

console.log('boots total: ', `$${boots.total}`)
console.log('group_shoes total: ', `$${group_shoes.total}`)

sneakers.print()
flipFlops.print()

group_shoes.print()