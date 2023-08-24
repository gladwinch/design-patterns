// Base Class - Beverage Preparation
class Beverage {
    prepare() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log("Boiling water...");
    }

    pourInCup() {
        console.log("Pouring into cup...");
    }

    // These are "hook" or abstract methods to be overridden by subclasses
    brew() {
        throw new Error("Subclass must implement the 'brew' method.");
    }

    addCondiments() {
        throw new Error("Subclass must implement the 'addCondiments' method.");
    }
}

// Derived Class - Tea
class Tea extends Beverage {
    brew() {
        console.log("Steeping the tea...");
    }

    addCondiments() {
        console.log("Adding lemon...");
    }
}

// Derived Class - Coffee
class Coffee extends Beverage {
    brew() {
        console.log("Dripping coffee through filter...");
    }

    addCondiments() {
        console.log("Adding sugar and milk...");
    }
}

// Using the templates
const tea = new Tea();
tea.prepare(); 
/* Outputs: 
   Boiling water...
   Steeping the tea...
   Pouring into cup...
   Adding lemon...
*/

const coffee = new Coffee();
coffee.prepare(); 
/* Outputs: 
   Boiling water...
   Dripping coffee through filter...
   Pouring into cup...
   Adding sugar and milk...
*/
