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

/* Optional Chaining Operator (?.) */

// The optional chaining operator (?.) allows you to access deeply nested properties of an object without having to check if each reference in the chain is valid. If a reference is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

console.log("\n========== Optional Chaining ===========");

let student = {
  name:"Priya",
  address:{
    city:"Surat"
  }
}

console.log(student?.name);

console.log(student.name);

console.log(student?.address?.city);

console.log(student.address.city);

console.log(student?.phone?.number);


/* Control Flow in Javascript */

/* 1. Sequential Control Flow */

{
  let a = 10
  let b = 20

  console.log(a);
  console.log(b);
  console.log(a + b);
}

/* Conditional Control Flow */

/*

1. if Statement
2. if.....else statement
3. if....else....if statement
4. switch case Statement
5. break Statement
6. continue Statement
7. Nested Statement

*/

// if statement

/* Execute a block of code only if the condition is true. */

{
  let age = 17;

  if(age >= 18){
    console.log("Adult");
  }
}

/* if...else statement */

/* Execute one block if the condition is true and another block if it is false. */

{
  let age = 18

  if(age >= 18){
    console.log("Adult");
  }else{
    console.log("Minor");
  }
}

/* if..else..if statement */

// used to check multiple conditions.

{
  let marks = 55

  if(marks >= 90){
    console.log("Grade A");
  }else if(marks >= 75){
    console.log("Grade B");
  }else if(marks >= 60){
    console.log("Grade C");
  }else{
    console.log("Fail");
  }
}

/* switch case statement */

/* Used when multiple cases depend on a single value. */

{
  let day = 8

  switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break
    case 3:console.log("Wednesday");
    break
    case 4:console.log("Thursday");
    break
    case 5:console.log("Friday");
    break
    case 6:console.log("Saturday");
    break
    case 7:console.log("Sunday");
    break
    default:console.log("invalid choice (choose between 1 to 7)");
  }
}



























