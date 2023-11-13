// function "name" property
// with normal function
function greeting() {
  console.log("Hello, how are you?");
};

console.log(greeting.name);

// with function expression
let greeting2 = function() {
  console.log("Hello World");
};
console.log(greeting2.name);


// object "name" property
let user = {
    greet1() {
        console.log('hello duniya')
    },
    greet2: function() {
        console.log('hello india')
    }
}
console.log(user.greet1.name)
console.log(user.greet2.name)


// the "length" in-built property
function single(a){}
function double(a,b){}
function many(a,b,...more){} //rest parameters are not counted

console.log(single.length)
console.log(double.length)
console.log(many.length)


// Custom Properties
function sayHi() {
  console.log("hare krishna");

  // counting how many times we run
  sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // hare krishna
sayHi(); // hare krishna

console.log( `called ${sayHi.counter} times...` ); // Called 2 times


// Nmaed Function Expression(NFE)
let hello = function(myname){
    console.log(`Hello ${myname}!`)
}
hello('Ram')

let hello2 = function func(myname){
    console.log(`Hello ${myname}!`)
}
hello2('Krishna')

// Advantages of NFE:
// a.It allows the function to reference itself internally.
// b.It is not visible outside of the function.
let exFunc = function func(who){
    if(who){
        console.log(`Hello ${who}`)
    }
    else{
        func('Guest')
    }
}
exFunc();
