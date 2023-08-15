var Shopper = require('./Shopper');
var { 
    InventoryItem,
    GoldenInventoryItem,
    DiamondInventoryItem
} = require('./InventoryItem');

var alex = new Shopper('Alex', 100);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);
var golden_necklace = new GoldenInventoryItem(necklace)

alex.purchase(necklace);
alex.purchase(walkman);
alex.lendMoney(5000)
console.log('golden_necklace: ', golden_necklace)
alex.purchase(golden_necklace);

alex.printStatus();
