let mname = {
    firstname: "Kunal",
    lastname: "Gurav"
}

function printFullname(city, state) {
    console.log(`Fullname: ${this.firstname} ${this.lastname}, City: ${this.city}, State: ${this.state}`)
}

printFullname.call(mname, 'Jaipur', 'Rajasthan') //Call
printFullname.apply(mname, ['Surat', 'Gujrat']) //Apply