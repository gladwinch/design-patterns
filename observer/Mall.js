class Mall {

    constructor() {
        this.sales = [];
    }

    notify(storeName, discount) {
        console.log(`${storeName} there is a sale of discount ${discount}`)
        this.sales.push({
            store: storeName,
            discount: discount
        })
        console.log(this.sales)
    }
}

module.exports = Mall;
