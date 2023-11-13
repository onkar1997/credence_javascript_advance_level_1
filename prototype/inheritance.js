// Prototype Inheritance

let animal = {
    eats: true
};

let lion = {
    runs: true,
    __proto__: animal
};

let monkey = {
    jumps: true,
    __proto__: lion
};

console.log(lion.runs)
console.log(lion.eats)
console.log(lion.hasOwnProperty(runs))

for(let prop in monkey) {
    let hasOwnProp = monkey.hasOwnProperty(prop)
    if(hasOwnProp) {
        console.log(`${prop} - monkey`)
    }
    else {
        console.log(`${prop} - prototype`)
    }
}


// ************************** TASKS **************************
// TASK 1
let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// console.log(pockets.pen)
// console.log(bed.glasses)

// TASK 2
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
  __proto__: hamster
};

let lazy = {
    stomach: [],
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
lazy.eat("mango");
// console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple