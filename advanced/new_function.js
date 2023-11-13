// "new Function"
// Syntax - let func = new Function([arg1, arg2, ...argN], functionBody)

// Example 1
let add = new Function('num1', 'num2', 'return num1 + num2')
console.log(add(2,2))

// Example 2
let greet = new Function('console.log("hello world")')
greet()