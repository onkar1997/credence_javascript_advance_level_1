// Promise.all()
let git_users = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
]

let requests = git_users.map(url => fetch(url))

Promise.all(requests)
.then(responses => responses.forEach(
    response => console.log(`${response.url}, ${response.status}`)
))


// Promise.allSettled()
Promise.allSettled(git_users.map(url => fetch(url)))
.then(results => results.forEach((result, num) => {
    if(result.status == "fulfilled") {
        console.log(`${git_users[num]}: ${result.value.status}`)
    }
    if(result.status == "rejected") {
        console.log(`${git_users[num]}: ${result.reason}}`)
    }
}))


// Promise.race()
Promise.race([
    new Promise((resolve,reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve,reject) => setTimeout(() => reject(new Error("ERROR!")), 2000)),
    new Promise((resolve,reject) => setTimeout(() => resolve(3), 3000))
]).then(result => console.log(result))


// Promise.any()
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]) 
.then(result => console.log(result))


// Promise.resolve()
let resolve = new Promise((resolve) => resolve('Promise Resolved.'))
resolve.then(result => console.log(result))


// Promise.reject()
let reject = new Promise((reject) => reject('Promise Rejected!'))
reject.then(result => console.log(result))