// /* Javascript Array */
// {
//   let num = [10, 20, 30, 40, 50];

//   console.log(num);

//   console.log(num.length);
// }

// /* constructor Array */

// {
//   let arr = new Array(10, 20, 30, 40, 50);

//   console.log(arr);

//   console.log(arr.length);
// }
// {
//   let result = new Array(10, 20);

//   console.log(result.length);

//   let arr = [10];

//   console.log(arr.length);
// }

// /* Array.from */

// {
//   let arr = Array.from("Apple");

//   console.log(arr);

//   let num = Array.from([1, 2, 3], (x) => x + 1);

//   console.log(num);
// }

// /* Array.isArray() */

// {
//   let num = [];
//   let arr = "apple";

//   let result1 = Array.isArray(num);

//   let result2 = Array.isArray(arr);

//   console.log(result1);

//   console.log(result2);
// }

// /* Array.of() */

// {
//   let arr = Array.of(10, 20, "name", true, undefined);

//   console.log(arr);
// }

// /* Array.at() */

// {
//   let arr = [10, 20, 30, 40, 50];

//   let result = arr.at(2);
//   // let result = arr.at(-2)

//   console.log(result);
// }

// /* Array.concat() */

// {
//   let arr1 = [10, 20, 30];
//   let arr2 = [40, 50, 60];

//   let arr3 = arr1.concat(arr2);

//   console.log(arr3);
//   console.log(arr1);
//   console.log(arr2);
// }

//
/*

fill()
find()
findIndex()
findLastIndex()
includes()
indexOf()
lastIndexOf()
join()
pop()
push()
shift()
unshift()
slice()
toString()
values()

*/

/* copyWithin() */

// copyWithin(target , start , end)

// {
//   let arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

//   // console.log(arr);

//   // // let result1 = arr.copyWithin(2)
//   // // let result1 = arr.copyWithin(0 , 4)
//   // // let result1 = arr.copyWithin(3 , 4)
//   // let result1 = arr.copyWithin(3 , 4 , 6)

//   // console.log(result1);

//   /* entries */

//   let result = arr.entries();

//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);
//   console.log(result.next().value);

//   /* keys */

//   let result1 = arr.keys();

//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result1.next().value);
//   console.log(result1.next().value);

//   /* values */

//   let result2 = arr.values();

//   console.log(result2.next().value);
//   console.log(result2.next().value);
//   console.log(result2.next().value);
//   console.log(result2.next().value);
//   console.log(result2.next().value);
//   console.log(result2.next().value);
// }

// /* filter */

// {
//   // let age = [10, 59, 23, 45, 36, 27, 5, 1];

//   let age = [
//     {
//       name: "vivek",
//       age: 20,
//     },
//     {
//       name: "milan",
//       age: 40,
//     },
//   ];

//   let result = age.filter((a) => a.age >= 30);

//   console.log(result);
// }

// {
//   let age = [
//     {
//       name: "vivek",
//       age: 20,
//     },
//     {
//       name: "milan",
//       age: 40,
//       marks:[10,  20 , 30 , {subject:"Maths"}]
//     },
//   ];

//   console.log(age[0].name);
//   console.log(age[1].name);
//   console.log(age[1].marks[3].subject);

//   // let num = [10 , 20]

//   // console.log(num[1]);
  
  
// }


/* String Method */

/*

concat()
slice()
at()
charAt()
endsWith()
startsWith()
includes()
indexOf()
lastIndexOf()
repeat()
search()
split()
toLowerCase()
toUpperCase()
trim()
trimStart()
trimEnd()

*/

