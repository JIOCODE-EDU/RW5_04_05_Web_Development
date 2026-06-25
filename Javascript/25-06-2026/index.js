/* ES6 Module in Javascript */

/* ES6 - 2015 */

// var keyword

var x = 10

// var : variable Keyword
// x : variable name
// 10 : value

console.log(x);

/* Hoisting in Javascript */


console.log(y);
var y = 20;

var z;
console.log(z);
z = 30


var a = 'a1'; var b = 'b1'; var c = 'c1'

console.log(a);
console.log(b);
console.log(c);
console.log(a , b ,c);

 /* redeclare / reassign */

var name = "Rahul"
name = "Zeel"

var name = "Rajesh"

console.log(name);


/* Let Keyword */

let names = "Kiran"
names = "Kirtan"

console.log(names);

/* const keyword */

const namex = "Rakesh"
console.log(namex);


/* Javascript Scope method */

/* Global Scope */


{
  var a1 = "a1"
  let a2 = "a2"
  const a3 = "a3"
  console.log(a1);
  console.log(a2);
  console.log(a3);
}


/* Block Scope */

{
  let x1 = true
  console.log(x1);
}


/* Function Scope */



function count(){
  let count = 0
  count += 1
  console.log(count);
  
}

console.log(count());
console.log(count());








