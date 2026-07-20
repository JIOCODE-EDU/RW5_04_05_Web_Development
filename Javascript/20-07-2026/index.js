/* Javascript Array */
{
  let num = [10 , 20 , 30 , 40 , 50]
  
  console.log(num);

  console.log(num.length);
  
}

/* constructor Array */
{
  let arr = new Array(10 , 20 , 30 , 40 , 50)
  
  console.log(arr);

  console.log(arr.length);
  
}
{
  let result = new Array(10 , 20)

  console.log(result.length);

  let arr = [10]

  console.log(arr.length);
}

/* Array.from */

{
  let arr = Array.from("Apple")

  console.log(arr);

  let num = Array.from([1 , 2 , 3] , (x) => x + 1)

  console.log(num);
  
}

/* Array.isArray() */

{
  let num=  []
  let arr = "apple"

  let result1 = Array.isArray(num)

  let result2 = Array.isArray(arr)

  console.log(result1);

  console.log(result2);
}

/* Array.of() */

{
  let arr = Array.of(10 , 20 , "name" , true , undefined)

  console.log(arr);
  
}

/* Array.at() */

{
  let arr = [10,  20 , 30 , 40 , 50]

  let result = arr.at(2)
  // let result = arr.at(-2)

  console.log(result);
}

/* Array.concat() */

{
  let arr1 = [10 , 20 , 30]
  let arr2 = [40 , 50 , 60]

  let arr3 = arr1.concat(arr2)

  console.log(arr3);
  console.log(arr1);
  console.log(arr2); 
}

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





