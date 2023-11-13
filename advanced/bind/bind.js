// 1st example
let printName = {
    firstname: "Kunal",
    lastname: "Gurav"
}

function printData(city, state) {
    console.log(`Fullname: ${this.firstname} ${this.lastname}, City: ${this.city}, State: ${this.state}`)
}

let print = printData.bind(printName, "Mumbai", "Maharashtra")
console.log(print())


// 2nd example
class MyClass {
    constructor() {
        this.library = "React"
        this.server = "https://localhost:3000"

        document.querySelector("button").addEventListener('click', this.handleClick.bind(this))
    }

    handleClick() {
        console.log("Button clicked !")
        console.log(`Server: ${this.server}`)
    }
}

const btn = new MyClass()

