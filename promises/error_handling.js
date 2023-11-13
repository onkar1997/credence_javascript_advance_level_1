// new Promise(() => {
//     add()
// })
// .then(result => console.log('successfull'))
// .catch(error => console.log(error))


// Implicit try... catch...
// new Promise((resolve, rejec) =>{
//     throw new Error('Whoops! Error..')
// })
// .catch(console.log())
// …Works exactly the same as this:
// new Promise((resolve, reject) => {
//     reject(new Error('Whoops! Error again..'))
// })
// .catch(console.log())


// Rethrowing
new Promise((resolve, reject) => {
    throw new Error('You have an error')
})
.catch(error => console.log('Error handled successfully..'))
.then(result => console.log('Rethrowing successfull'))