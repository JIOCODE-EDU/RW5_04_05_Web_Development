/* Javascript Object Methods */

//assign
{
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, d: 4 };

  let result = Object.assign(obj2, obj1);

  console.log(obj1);
  console.log(obj2);
}

//create

{
  const person = {
    name: "vivek",
    age: 20,
    user() {
      console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    },
  };

  const result = Object.create(person);

  console.log(result.user());

  result.marks = 20;

  console.log(result.marks);

  const result1 = person.user();
}

// entries
// Keys
// values

{
  let obj1 = { a: 1, b: 2, c: 3 };

  for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key} : ${value}`);
  }

  for (const key of Object.keys(obj1)) {
    console.log(`${key}`);
  }

  for (const value of Object.values(obj1)) {
    console.log(`${value}`);
  }
}


