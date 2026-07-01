/* Operators in Javascript */

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators / Relational Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators
7. Conditional (Ternary) Operator
8. Comma Operator
9. Unary Operators
10. Type Operators
12. Spread Operator
13. Destructuring Assignment
14. Optional Chaining Operator 
*/

/* String Operators */

console.log("===== String Operators ====");

let firstName = "Rahul"
let lastName = "Sharma"

let fullName = firstName + " " + lastName

console.log(fullName);

let greeting = "Hello "

greeting += fullName

console.log(greeting);

/* Template Literal */

{
  let name = "Zeel"

  console.log("my name is", name);

  console.log(`my name 
    is ${name}`);
}

/* Ternary Operator */

// syntax : condition ? value if true:value if false

console.log("====== Ternary Operator =====");

let marks = 39;
let result = marks >= 40 ? "Pass" : "Fail"

console.log(result);

/* Typeof Operators */

console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function(){});


/* Unary Operators */

let num = 10

console.log(num++);

num--

++num
--num

console.log(++num);

/*

/* spread Operator & Rest Parameter (...) */

let arr1 = [1, 2 , 3 ]
let arr2 = [...arr1 , 4 , 5 , 6]

console.log(arr1  , arr2);

console.log(arr2);

let person = {name:"Rahul" , age:25}
let details = {...person , city:"Surat"}

console.log(person);
console.log(details);

// Rest Parameter

function add(...num){
  return  num.reduce((prev , next) => prev + next , 0)
}
console.log(add(10 , 20 , 30 , 40));

/* Distructuring Assignment */
{
  let num = [1 , 2 , 3 , 4]
  
  const [n1 , n2 , n3 , n4] = num
  
  console.log(n4);

  let details = {
    name:"Rahul",
    age:20,
    city:"Surat"
  }

  console.log(details.name);

  const {name , age , city} = details

  console.log(name);
  console.log(age);
  console.log(city);

}















































