let myMixins = {
    sayHi() {
        console.log(`Hi, ${this.name}!`)
    },
    sayBye() {
        console.log(`Bye, ${this.name}.`)
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, myMixins)

let user = new User('Onkar')
user.sayHi();
user.sayBye();


// Inheritance Mixin
let sayMixin = {
    say(phrase) {
        console.log(phrase)
    }
}

let sayHiMixin = {
    __proto__ : sayMixin,

    sayHi() {
        super.say(`Hiiii ${this.name}`)
    },

    sayBye() {
        super.say(`Byeeee ${this.name}`)
    }
}

class Usr {
    constructor(name){
        this.name = name;
    }
}

Object.assign(Usr.prototype, sayHiMixin)
let usr = new Usr('Bhaskar')
usr.sayHi()
usr.sayBye()