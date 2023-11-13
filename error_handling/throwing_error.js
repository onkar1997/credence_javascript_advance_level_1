// Throwing our own error

let json = '{"age":30}'
try{
    let user = JSON.parse(json);

    if(!user.name){
        throw new SyntaxError('"user.name" not found!')
    }
    console.log(user.name)
}
catch(e){
    console.log("JSON Error: " + e.message)
}