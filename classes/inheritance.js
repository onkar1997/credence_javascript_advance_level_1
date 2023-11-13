// Inheritance and Overriding Methods
// class Car {
//     constructor(brand) {
//         this.speed = 0;
//         this.brand = brand;
//     }

//     drive(speed) {
//         this.speed = speed;
//         console.log(`${this.brand} is running at speed : ${this.speed} kmph.`)
//     }

//     brake() {
//         this.speed = 0;
//         console.log(`${this.brand} stopped !`)
//     }
// }

// class Swift extends Car {
//     gear() {
//         console.log(`${this.brand} geared down`)
//     }

//     brake() {
//         super.brake();
//         this.gear();
//     }
// }

// let swift = new Swift('White Swift')
// swift.drive(50)
// swift.brake()


// Overriding Constructor
class Car {
    constructor(brand) {
        this.speed = 0;
        this.brand = brand;
    }

    drive(speed) {
        this.speed = speed;
        console.log(`${this.brand} is running at speed : ${this.speed} kmph.`)
    }

    brake() {
        this.speed = 0;
        console.log(`${this.brand} stopped !`)
    }
}

class Swift extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    gear() {
        console.log(`${this.brand} geared down`)
    }
}

let car = new Swift('White Swift', 'S1234')
car.drive(50)
console.log(`Brand: ${car.brand}`)
console.log(`Model: ${car.model}`)



// ************************** TASKS ***************************
// TASK 1
// class Animal {
//     constructor(name){
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name){
//         super(name);
//         this.created = Date.now();
//     }
// }

// let rabbit = new Rabbit("White Rabbit")
// console.log(rabbit.name)