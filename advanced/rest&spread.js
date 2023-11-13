// Rest Operator
function rests(num1, num2, ...args){
    for(let arg of args){
        console.log(arg)
    }
}
// rests(1,2,3,4,5)

// Spread Operator
let a = [1,2,3]
let b = [4,5,6]
console.log(Math.max(0, ...a, ...b, 7))

