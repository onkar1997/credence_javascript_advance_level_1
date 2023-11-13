// Promise
let promise = new Promise((resolve, reject) => {
  let num = 11
  setTimeout(() => {
    if(num === 10) {
      resolve('SUCCESS: Number is 10')
    }
    else {
      reject('ERROR: Number is not 10 !')
    }
  }, 1000)
})

promise.then(result => console.log(result)).catch(error => console.log(error)).finally(() => console.log('Finished Execution...'))

// Promise Chaining
new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}).then((result) => {
  console.log(result)
  return result * 2;
}).then((result) => {
  console.log(result)
  return result * 2;
}).then((result) => {
  console.log(result)
  return result * 2;
})


// ******************** TASK *********************

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));