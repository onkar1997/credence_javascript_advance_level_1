// try..catch..finally 
try {
    console.log('Welcome')
}
catch(err){
    console.log(err)
}
finally{
    console.log('Thanks, Bye!')
}


// With Error
try {
    console.log('Welcome')
    username;
}
catch(err){
    console.log("ERROR: username not found!")
}
finally{
    console.log('Thanks, Bye!')
}