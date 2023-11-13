// Global object for browser is "window" and for node environment is "global" and universal global object name is "globalThis"

alert('hello')
// is same as
window.alert('hello window')


// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object
var gVNum = 5;
alert(window.gVNum); // 5 (became a property of the global object)


// If we used let instead, such thing wouldn’t happen:
let gLNum = 5;
alert(window.gLNum); // undefined (doesn't become a property of the global object)