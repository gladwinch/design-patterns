class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount) {
        console.log(`${storeName} there is a sale of discount ${discount}`)
    }
}

module.exports = Shopper;
