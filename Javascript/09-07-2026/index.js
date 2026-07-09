/* Javascript Functions */

// 1. Function Declaration

// Hoisted

// {
//   console.log(add(10 , 20));
  
//   function add(a , b){
//     return a + b
//   }
// }

//2. Function Expression

// Stored in a variable; not hoisted

// {

//   const add = function(a , b){
//     return a + b
//   }
  
//   console.log(add(10 , 20));
// }

//3. Anonymous Function

// A function without a name

// {
//   setTimeout(function(){
//     console.log("Hello");
//   } , 3000)
// }

//4. Named Function Expression

// use for debugging and recursion

// {
//   const factorial =  function fact(n){
//     return n <= 1 ? 1 : n * fact(n - 1)
//   }
  
//   console.log(factorial(5));
// }

// 5. Arrow function (ES6)

// Short Syntax : laxical scope

// {
//   const add = (a , b) => console.log(a + b);
  
//   const square = x => x * x
  
//   add(10 , 20)
//   console.log(square(10));
// }



//. Immediately Invoked Function Expression (IIFE)

// (function(){
//   console.log("IIFE Functions");
// })()

// (() => {
//   console.log('Arrow IIFE')
// })()

// 7. Callback function

// function processData(callback){
//   callback(10 , 100)
// }

// function add(a , b){
//   return console.log(a + b);
// }

// processData(add)

// 8. HOC function (Higher-Order Function)

// Used to Accept or return another function

// {
//   function multi(fact){
//     return function(n){
//       return n * fact
//     }
//   }
  
//   const func1 = new multi(2)
  
//   console.log(func1(10));
// }

// 9. Constructor Function

// Used to create object with new

// {
//   function User(name , age){
//     this.name = name
//     this.age = age
//   }
  
//   const user1 = new User("Vivek" , 20)
  
//   console.log(user1);
// }

// 10. Object Function

// Function defined inside an Object.

const user = {
  name:"Rahul",
  greet(){
    return `Hello, ${this.name}`
  }
}

console.log(user.greet());













