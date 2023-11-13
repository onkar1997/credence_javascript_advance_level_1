var myname = 'onkar'
console.log(myname);

// "var" has no block scope
// 1
if(true){
    var myage = 25
}
console.log(myage);

// 2
for (var i = 0; i < 10; i++) {
  var one = 1;
}
console.log(i);   // 10, "i" is visible after loop, it's a global variable
console.log(one); // 1, "one" is visible after loop, it's a global variable


// "var" tolerates redeclarations
var game = 'cricket'
var game = 'hockey'
console.log(game)


// "var" variables can be declared below their use
function sayHi() {
  phrase = "Hello";
  console.log(phrase);
  
  var phrase;
}
sayHi();