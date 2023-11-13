// Normal Class
class CoffeeMachine1 {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`Created COFFEE-MACHINE with POWER: ${this.power}`)
    }
}
// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;


// Protected
class CoffeeMachine2 {
    _waterAmount = 0;

    constructor(power) {
        this._power = power;
    }

    set waterAmount(value) {
        if(value < 0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }
}
let coffeeMachine = new CoffeeMachine2(100);
coffeeMachine._waterAmount = 200;
console.log(coffeeMachine._waterAmount)

coffeeMachine._waterAmount = -10;
console.log(coffeeMachine._waterAmount)


// Private
class CoffeeMachine3 {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

}

let coffeeMachine = new CoffeeMachine3();
coffeeMachine.#fixWaterAmount(123); // Error(It's Private, so cannot access outside)
coffeeMachine.#waterLimit = 1000; // Error(It's Private, so cannot access outside)