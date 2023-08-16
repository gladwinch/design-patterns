class Store {

    constructor(name) {
        this.name = name;
        this.subscribers = []
    }

    sale(discount) {
        console.log(`Announce sale at ${this.name}, ${discount}% off everything!`);
        this.subscribers.forEach((subscriber) => {
            subscriber.notify(this.name, discount)
        })
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }
}

module.exports = Store;
