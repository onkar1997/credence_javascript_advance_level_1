// Rethrowing Error
let json = '{"age":25, "name":"onkar"}'

try {
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError('Incomplete data: no name found!')
    }

    printUser()

    console.log(user.name)
}
catch(err) {
    if(err instanceof SyntaxError) {
        console.log('JSON Error: '+ err.message)
    }
    else {
        console.log(err)
    }
}