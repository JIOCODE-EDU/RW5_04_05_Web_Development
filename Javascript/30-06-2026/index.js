/* Operators in Javascript */

/*
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise Operators
6. String Operators
7. Conditional (Ternary) Operator
8. Comma Operator
9. Unary Operators
10. Type Operators
11. Relational Operators
12. Spread Operator
13. Destructuring Assignment
14. Optional Chaining Operator 
*/

/* Arithmetic Operator */

let a = 2 // operands 
let b = 4

console.log("Addition:" , a + b);
console.log("Substraction :" , a - b);
console.log("Multiplication :" , a * b);
console.log("Division :" , a / b);
console.log("Modulus:" , a % b);
console.log("Expontiations :" , a ** b);

/* Assignment Operators */

let x = 4

x += 2 // x = x + 2

console.log(x);

x -= 3

console.log(x);

x *= 3

console.log(x);

x /= 3

console.log(x);

x %= 2

console.log(x);

x **= 3

console.log(x);

/* Comparison Operators */

let y = 10

console.log(y == 10);

console.log(y === '10');

console.log(y != 10);

console.log(y !== 10);

console.log(y < 10);

console.log(y > 10);

console.log(y <= 10);

console.log(y >= 10);

/* Logical Operators */

let decision1 = true
let decision2 = false
let decision3 = true

/* Logical And (&&) */

console.log(decision1 && decision2);
console.log(decision2 && decision3);
console.log(decision2 && decision2);
console.log(decision1 && decision1);

/* Logical OR (||) */

console.log(decision1 || decision2);
console.log(decision2 || decision2);

/* Logical Not (!) */

console.log(!decision1);
console.log(!decision2);

/* Bitwise Operator */

let bit1 = 5 // 0101
let bit2 = 3 // 0011   

console.log(bit1 & bit2);
console.log(bit1 | bit2);
console.log(bit1 ^ bit2);





















