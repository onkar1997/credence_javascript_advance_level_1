function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
// console.log( pow(2, 3) ); // 8


// ************************* TASKS *************************
// TASK 1 - Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n
// a.Using for loop
function sumTo(num) {
    let result=0
    for(let i=num; i>0; i--){
        result += i;
    }
    console.log(result)
}
// sumTo(2)

// b.Using recursion
function sumTo(num) {
    if(num <= 1){
        return num;
    }
    else {
        return num + sumTo(num - 1)
    }
}
// console.log(sumTo(2))

// c.Using AP Formula
function sumTo(num) {
    let result = num * (num + 1) / 2
    return result
}
// console.log(sumTo(100))

// TASK 2 - Calculate Factorial
function factorial(num) {
    if(num === 1) {
        return num;
    }
    else {
        return num * factorial(num - 1)
    }
}
// console.log(factorial(3))

//  TASK 3 - Fibonacci Numbers
// a.Using Recursion
function fib(num) {
   if(num <= 1) {
    return num;
   }
   else {
    return fib(num-1) + fib(num-2)
   }
}
// console.log(fib(7))

// b.Using for loop
function fib(num){
   let num1 = 1; 
   let num2 = 1; 
   for(let i=3; i<=num; i++){
    let result = num1 + num2;
    num1 = num2;
    num2 = result;
   }
   return num2;
}
// console.log(fib(7))

// TASK 4 - Output a single-linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// a.Using loop
function printList(list){
    let temp = list;
    
    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}
// printList(list)

// b.Using recursion
function printList(list){
    console.log(list.value)
    
    if(list.next){
        printList(list.next)
    }
}
// printList(list)

// TASK 5 - Output a single-linked list in Reverse order
let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// a.Using loop
function printReverseList(list){
    let arr = [];
    let temp = list;
    
    while(temp){
        arr.push(temp.value)
        temp = temp.next;
    }

    for(let i=arr.length-1; i>=0; i--){
        console.log(arr[i])
    }
}
// printReverseList(list2)

// b.Using recursion
function printReverseList(list){
    if(list.next){
        printReverseList(list.next)
    }
    console.log(list.value)
}
printReverseList(list2)