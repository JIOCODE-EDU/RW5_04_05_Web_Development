/* Javascript Object */

{
  let obj = {
    name : "vivek",
    age : 25,
    country: {
      state:"gujarat",
      city:"surat"
    },
    say : function(){
      console.log("Hello World!!");
    }
  }



/* Javascript Object Access */

/* Dot Notation */

  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.country.state);
  console.log(obj.country.city);
  obj.say()


/* Bracket Notation */


  console.log(obj["name"]);
  console.log(obj["age"]);
  console.log(obj["country"]["state"]);
  console.log(obj["country"]["city"]);
  obj["say"]()
}



/* Creation of Javascript Object */

/* Object Literals */

{
  let obj = {
    name : "vivek",
    age : 25,
  }

  console.log(obj);
  
}


/* Object with new Keyword */

{
  let obj = new Object({
    name:"vivek"
  })

  console.log(obj);
  
}

/* Constructor function */

{
  function Person(name , age){
    this.name = name
    this.age = age
  }

  let obj = new Person("vivek" , 25)

  console.log(obj);
  
  
}
