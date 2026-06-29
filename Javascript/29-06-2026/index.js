/* Built-in Constants */

/*

1. null
2. isNaN()
3. Number.isNaN()
4. NaN
5. undefined and null
6. Infinity and -Infinity
7. Number Constants

*/

/* Null */

// null is a primitive value.
// It represents the international absence of any object value.
// It is assigned by the programmer.

console.log("===== Null =======");

console.log(null);

console.log(typeof null);

console.log(null == undefined);

console.log(null === undefined);

console.log(null === null);


/* isNaN */

/* 

isNaN() checks whether a value is Not-a-Number. 
It first converts the value into a number.

*/

console.log("===== isNaN =======");

console.log(isNaN(NaN));

console.log(isNaN(100));

console.log(isNaN(-2e-4));

console.log(isNaN(Infinity));

console.log(isNaN(true));

console.log(isNaN(false));

console.log(isNaN(null));

console.log(isNaN(""));

console.log(isNaN("45"));

console.log(isNaN("Hello"));


/* Number.isNaN() */

/*

Introduced in ES6-2015
It does not convert value before checking
*/

console.log("====== Number.isNaN()======");

console.log(Number.isNaN(NaN));

console.log(Number.isNaN(100));

console.log(Number.isNaN(true));

console.log(Number.isNaN(false));

console.log(Number.isNaN({}));

console.log(Number.isNaN([]));

/* NaN */

/*

NaN means "Not a Number".

It is retuned whenever a methematical operation fails.

typeof NaN is 'number'

*/

console.log("====== NaN =======");

console.log(NaN);

console.log(typeof NaN);

console.log(NaN == NaN);

console.log(NaN === NaN);

console.log(Number.NaN);

console.log(window.hasOwnProperty("NaN"));

/* undefined and null */

console.log("====== undefined =========");

let x;

console.log(typeof x);

console.log(x === undefined);
let student = {
  name:"Rahul"
}


console.log(student.name);

console.log(student.age === undefined);

/* Infinity and -Infinity */

/* Infinity */

/*

Grether than every number.
Produced by dividing by zero 

*/

/* -Infinity */

/*

Smaller than every numbers.
Produced by dividing by nagative Zero.


*/

console.log(Infinity);
console.log(-Infinity);
console.log(1 / 10);
console.log(1 / 0);
console.log(23/Infinity);
console.log(Number.MAX_VALUE * 2);
console.log(Infinity + Infinity);



/* Number Constansts */

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.EPSILON);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Number.NaN);





































