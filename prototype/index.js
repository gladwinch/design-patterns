const scout_prototype = require('./scout_prototype')

const alex = scout_prototype.clone()
alex.name = 'alex'
alex.addItemToList('car')

const den = scout_prototype.clone()
den.name = 'den'
den.addItemToList('bike')

console.log(`user ${alex.name} items are ${alex.shoppingList}`)
console.log(`user ${den.name} items are ${den.shoppingList}`)