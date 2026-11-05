import { ValidationErrors } from "@/lib/types";

export function validateStudent(data: unknown) {
  const errors: ValidationErrors = {};

  // Name : at least 3 characters. only letter and spaces
  const student =
    typeof data === "object" && data != null && !Array.isArray(data)
      ? (data as Record<string, unknown>)
      : {};
  const name = typeof student.name === "string" ? student.name : "";
  const email = typeof student.email === "string" ? student.email : "";
  const password = typeof student.password === "string" ? student.password : "";
  const phone = typeof student.phone === "string" ? student.phone : "";
  const gender = typeof student.gender === "string" ? student.gender : "";
  const hobbies = Array.isArray(student.hobbies) ? student.hobbies : [];
  const city = typeof student.city ? student.city : "";

  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 character.";
  }

  if (!email) {
    errors.email = "email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Enter a valid email (abc@example.com)";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (
    !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    )
  ) {
    errors.password = `Has minimum 8 characters in length. Adjust it by modifying {8,}
At least one uppercase English letter. You can remove this condition by removing (?=.*?[A-Z])
At least one lowercase English letter.  You can remove this condition by removing (?=.*?[a-z])
At least one digit. You can remove this condition by removing (?=.*?[0-9])
At least one special character,  You can remove this condition by removing (?=.*?[#?!@$%^&*-])`;
  }

  if (!phone) {
    errors.phone = "Phone is required.";
  } else if (!/^\+[1-9]\d{1,14}$/.test(phone)) {
    errors.phone = "Phone must be 10 digit and start with 6-9";
  }

  if(!gender){
    errors.gender = "Please select a gender."
  }

  if(hobbies.length === 0 || !hobbies.every((hobby) => typeof hobby === "string")){
    errors.hobbies = "Select at least one hobby."
  }

  if(!city){
    errors.city = "Please select a city."
  }

  return errors


}
