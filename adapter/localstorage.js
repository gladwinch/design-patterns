const { writeFile, existsSync, readFileSync, unlink } = require('fs')

class LocalStorage {

    constructor() {
        if(existsSync('localStorage.json')) {
            const txt = readFileSync('localStorage.json')
            this.items = JSON.parse(txt)
        } else {
            this.items = {}
        }
    }

    get length() {
        return Object.keys(this.items).length
    }

    getItem(key) {
        return this.items[key]
    }

    setItem(key, value) {
        this.items[key] = value
        writeFile('localstorage.json', JSON.stringify(this.items), error => {
            if(error) {
                console.log(error)
            }
        })
    }

    clear() {
        this.items = {}
        unlink('localstorage.json', (error) => {
            if(error) {
                console.log(error)
            }
        })
    }
}

module.exports = new LocalStorage()