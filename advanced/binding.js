// function binding
let user = {
    fname: 'onkar'
};

function printName() {
    console.log(`Hello, ${this.fname}`)
}

let usr = printName.bind(user)
usr();


// function binding with arguments
let user2 = {
    fname: 'bhaskar'
}

function printName2(phrase){
    console.log(`${phrase} ${this.fname}`)
}

let usr2 = printName2.bind(user2)
usr2('Hey,');


// binding with object method
let employee = {
    emp_name: 'Onkar Pawar',
    greet() {
        console.log(`Welcome ${this.emp_name} to Credence Analytics`)
    }
}
employee.greet() //doesn't print emp_name so below is the solution using bind
let greet = employee.greet.bind(employee)
greet()


// Partial function bind
function mul(a,b) {
    console.log(a*b)
}

let doubleValue = mul.bind(null,2)
res(2)
res(3)