// Basic Class Syntax and Static Properties and Methods
class Animal {
    static eating = true;

    constructor(value) {
        this.name = value
    }

    static run() {
        console.log(`${this.name} is running`)
    }

    getName(){
        return `Animal name : ${this.name}`
    }
}
let zebra = new Animal('Zebra')
console.log(zebra.getName()) 
Animal.eating
Animal.run()

let lion = new Animal('Lion')
console.log(lion.getName())


// Class Expression
let User = class {
    greet() {
        console.log('Greetings of the day!')
    }
}
let onkar = new User()
onkar.greet()


// Named Class Expression
let Country = class MyCountry {
    getCountryName() {
        console.log(MyCountry)
    }
}
new Country().getCountryName()
// console.log(MyCountry) - error(MyCountry name isn't available outside the class)


// Getters and Setters
class MyGame {
    constructor(gname) {
        this.gname = gname;
    }

    get gname() {
        return this._gname;
    }

    set gname(value) {
        if(value.length <= 3){
            console.log('Game name should be of type string and atleast 4 characters long!')
            return;
        }
        this._gname = value;
    }
}
let game = new MyGame('Chess');
console.log(game.gname)
game = new MyGame("")


// Computed names
class Usr {
    ['say' + 'Hi']() {
        console.log('Hii..')
    }
}
let usr = new Usr();
usr.sayHi() 


// Bound methods with class fields
class Button{
    constructor(value) {
        this.value = value
    }

    click() {
        console.log(`${this.value}`)
    }
}

let btn = new Button('button clicked!')
// setTimeout(btn.click(), 1000) // error
// setTimeout(btn.click, 1000) // undefined
setTimeout(() => btn.click(), 1000) // solution or make the click funcion arrow function


// ********************** TASK ************************
// 1.The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.
// https://plnkr.co/edit/MmhvN3wn0sUBqjwR?p=preview&preview - function clock

class Clock {
    constructor({template}) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) {
            hours = '0' + hours;
        }

        let mins = date.getMinutes()
        if(mins < 10) {
            mins = '0' + mins;
        }

        let secs = date.getSeconds()
        if(secs < 10) {
            secs = '10' + secs;
        }

        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        console.log(output)
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    }
}

let clock = new Clock({template: 'h:m:s'})
clock.start()