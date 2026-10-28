export function validateStudent(data){

  const errors = {};

  // Name : at least 3 characters. only letter and spaces

  if(!data.name || data.name.trim().length < 3){
    errors.name = "Name must be at least 3 characters."
  }

  
}