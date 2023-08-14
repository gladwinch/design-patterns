const userFactory = require('./userFactory')

var alex = userFactory('Alex Banks', 100, false);
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(320)
console.log( alex.toString() )
console.log( eve.toString() )
