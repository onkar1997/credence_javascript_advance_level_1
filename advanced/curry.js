// using closures
function sum(num1) {
    return function(num2) {
        console.log(num1 + num2)
    }
}

let result = sum(5)
result(5)

// using bind 
let multiply = function(x,y) {
    console.log(x*y)
}

let result2 = multiply.bind(this, 6)
result2(6)