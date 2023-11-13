// EXPORT BEFORE DECLARATIONS

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// export a object
export const employee = {
    fullname: "onkar pawar",
    age: 26,
    profile: "backend developer",
    location: "mumbai"
}

// export a function
export function printHi() {
    console.log('Hi')
}



// EXPORT APART FROM DECLARATIONS
const user = {
    fullname: "onkar pawar",
    age: 26,
    profile: "backend developer",
    location: "mumbai"
}

function printHello() {
    console.log('Hello')
}

export {user, printHello};



// EXPORT "as"
let email = "onkar@gmail.com"

export {email as em};