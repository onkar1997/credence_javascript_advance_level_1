// setTimeout and setInterval

// setTimeout(() => {
//     console.log('2 seconds over...')
// }, 2000)

// let count=1;
// setInterval(() => {
//     console.log(`${count}`)
//     count++;
// }, 1000)


// clearTimeout and clearInterval
let timerId = setTimeout(() => {
    console.log('hi.')
}, 1000)
clearTimeout(timerId)

let intervalId = setInterval(() => {
    console.log(`hello`)
}, 1000)
clearInterval(intervalId)


// Nested setTimeout - The nested setTimeout is a more flexible method than setInterval. This way the next call may be scheduled differently, depending on the results of the current one.
// let timeId = setTimeout(() => {
//     console.log('tick')
//     timeId = setTimeout(() => {
//         console.log('inner timeout')
//     }, 1000)
// }, 2000)


// Zero delay setTimeout
// setTimeout(() => {
//     console.log('hello onkar')
// }, 0)

// setTimeout(() => {
//     console.log('hello world')
// })



// ********************* TASKS ************************
// TASK - Output every second
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// // Using setTimeout
function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function run() {
        console.log(current);
        if (current < to) {
            setTimeout(run, 1000);
        }
        current++;
    }, 1000);

}
printNumbersTimeout(5,10)

// Using setInterval
function printNumbersInterval(from, to){
    let current = from;

    let timerId = setInterval(() => {
        console.log(current)
        if(current < to) {
            current++;
        }
        else {
            clearInterval(timerId)
        }
    }, 1000)

}
printNumbersInterval(1,5)