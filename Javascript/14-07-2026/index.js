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

// const user = {
//   name:"Rahul",
//   greet(){
//     return `Hello, ${this.name}`
//   }
// }

// console.log(user.greet());

// 11. Generator Function

// function* generator(){
//   yield 1
//   yield 2
//   yield 3
// }

// Example

function* generator(){
  let i = 0 
  while(i < 3){
    yield i++
  }         
  console.log("Generator Function Completed");
  console.log(i)
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// 12. Async Function

async function fetchData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await response.json()
  console.log(data);
}

fetchData()

// 13. Recursive Function

function factorial(n){ 
  if(n === 0){
    return 1
  }
  return n * factorial(n - 1)
}

console.log(factorial(5));


// 14. Pure Function

// A function that does not have any side effects and returns the same output for the same input.

function add(a , b){
  return a + b
}

console.log(add(20 , 30))
console.log(add(30 , 30))


// 15. Impure Function

// A function that has side effects or returns different output for the same input. 

let total = 0;

function addImpure(a , b){
  total += a + b
  return total
}

console.log(addImpure(20 , 30))
console.log(addImpure(30 , 30))

// 16.Default Parameters

function greet(name = "Guest"){
  return `Hello, ${name}`
}


console.log(greet());
console.log(greet("Alice"));


//17. Rest Parameters

function sum(...numbers){
  return numbers.reduce((acc , curr) => acc + curr , 0)
}

console.log(sum(1 , 2 , 3 , 4 , 5));

// 18. Function with Destructured Parameters

function displayUser({name , age}){
  return `Name: ${name}, Age: ${age}`
}

console.log(displayUser({name: "John" , age: 30}))

// 19. Bind Method

const user = {
  name: "John",
  greet: function(){
    return `Hello, ${this.name}`
  }
}

const greetUser = user.greet.bind(user)

console.log(greetUser());

// 20. Closure

function outerFunction(outerVariable){    
  return function innerFunction(innerVariable){
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  }
}

const newFunction = outerFunction("outside");
newFunction("inside");

// 21. Function Currying

function multiply(a){
  return function(b){
    return a * b
  } 
}

const multiplyBy2 = multiply(2)
console.log(multiplyBy2(5));

// 22. TNRN function
{
  function welcomeMessage(){
    console.log("Welcome to the world of JavaScript Functions!");
  }
  
  welcomeMessage()
}


// 23. TNRS function

{

  function welcomeMessage(){
    return "Welcome to the world of JavaScript Functions!"
  }
  
  console.log(welcomeMessage());
}


// 24. TSRN function

{
  function welcomeMessage(name){
    console.log(`Welcome to the world of ${name} Functions!`);
  }

  welcomeMessage("JavaScript");
}

// 25. TSRS function

{
  function add(a , b){
    return a + b
  }

  console.log(add(5, 10));
}



