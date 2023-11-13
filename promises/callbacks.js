function add(a,b) {
    return a+b;
}

function sum(num1, num2, operation){
    let result = operation(num1, num2)
    console.log("Sum = " + result);
}

sum(5, 5, add)
