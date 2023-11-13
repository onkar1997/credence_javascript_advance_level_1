// Variable Scope
if (true) {
  let phrase = "Hello!";

  alert(phrase); // Hello!
}
alert(phrase); // Error, no such variable


// Nested Function Scope
function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + getFullName() );
  alert( "Bye, " + getFullName() );
}


// Closure
function sum(num1){
    return function(num2){
        return num1+num2
    }
}
console.log(sum(1)(2))
console.log(sum(5)(-1))