export type StudentInput = {
  name:string,
  email:string,
  password:string,
  phone:string,
  gender:string,
  hobbies:string[];
  city:string
}

export type Student = StudentInput & {id:string}


export type ValidationErrors = Partial<Record<keyof StudentInput , string>>;

export function isStudentInput(value:unknown): value is StudentInput {
  if (typeof value !== "object" || value === null || Array.isArray(value)){
    return false;
  }

  const student = value as Record<string , unknown>;

  return(
    typeof student.name === "string" &&
    typeof student.email === "string" &&
    typeof student.password === "string" &&
    typeof student.phone === "string" &&
    typeof student.gender === "string" &&
    Array.isArray(student.hobbies) &&
    student.hobbies.every((hobby) => typeof hobby === "string") &&
    typeof student.city === "string"
  )
}

export function isStudent(value : unknown):
value is Student{
  return(
    isStudentInput(value) && "id" in value && typeof value.id === "string"
  )
}


