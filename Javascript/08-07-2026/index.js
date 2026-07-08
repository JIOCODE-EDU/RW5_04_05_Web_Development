/* Loops in Javascript */

/*

1. for loop
2. while loop
3. do while loop
4. for in loop
5. for of loop

*/


/* 1. for loop */

// for loop is used to run a block of code a certain number of times. It consists of three parts: initialization, condition, and increment/decrement.


// syntax of for loop
/*
for(initialization; condition; increment/decrement){
    // block of code to be executed
}
*/

// for(let i = 0; i <= 5; i++){
//   console.log(i);
// }

// for(let i = 0; i < 10; i++){
//   for(let j = 0; j < 10; j++){
//     if(i == 5){
//       break;
//     }
//     console.log(i + " " + j);
//   }
// }

// for(let i = 0; i < 10; i++){
//   for(let j = 0; j < 10; j++){
//     if(i == 5){
//       continue;
//     }
//     console.log(i + " " + j);
//   }
// }

/* 2. while loop */

// while loop is used to run a block of code as long as a specified condition is true. It consists of two parts: condition and block of code to be executed.  

/* syntax */

/*
while(condition){
    // block of code to be executed
    // increment/decrement
}
*/

// let i = 0;

// while(i < 5){
//   console.log(i);
//   i++;
// }

/* 3. do while loop */

// do-while loop is similar to while loop, but it will always execute the block of code at least once, even if the condition is false. It consists of two parts: block of code to be executed and condition.

/* syntax */

/*
do{
  // block of code to be executed
}while(condition)
*/

// let i = 1;

// do{
//   console.log(i);
//   i++;
// }while(i < 5);

/* 4. for in loop */

// for in loop is used to loop through the properties of an object. It consists of two parts: variable and object.


/* syntax */

/*

for(variable in object){
    // block of code to be executed
}

*/

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// console.log(person.name)
// console.log(person['name']);


for(let key in person){
  console.log(key + ": " + person[key]);
}

/* 5. for of loop */

// for of loop is used to loop through the values of an iterable object. It consists of two parts: variable and iterable object.

/* syntax */
/*
for(variable of iterable){
    // block of code to be executed
}
*/

let numbers = [1, 2, 3, 4, 5];

for(let number of numbers){
  console.log(number);
}

let str = "Hello";

for(let char of str){
  console.log(char);
}
