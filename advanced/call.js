function SetUsername(username) {
    this.username = username
    console.log("Username set successfully...")
}

function CreateUser(username, email, password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
    console.log("User created successfully...")
}

const user = new CreateUser("Onkar", "onkar@gmail.com", "123")
console.log(user)