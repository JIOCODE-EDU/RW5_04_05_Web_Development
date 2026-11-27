import type { ValidationErrors } from "@/lib/types";

export function validateStudent(data: unknown): ValidationErrors {
  const errors: ValidationErrors = {};
  const student =
    typeof data === "object" && data !== null && !Array.isArray(data)
      ? (data as Record<string, unknown>)
      : {};
  const name = typeof student.name === "string" ? student.name : "";
  const email = typeof student.email === "string" ? student.email : "";
  const password = typeof student.password === "string" ? student.password : "";
  const phone = typeof student.phone === "string" ? student.phone : "";
  const gender = typeof student.gender === "string" ? student.gender : "";
  const hobbies = Array.isArray(student.hobbies) ? student.hobbies : [];
  const city = typeof student.city === "string" ? student.city : "";

  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters.";
  } else if (!/^[A-Za-z ]+$/.test(name.trim())) {
    errors.name = "Name can contain only letters and spaces.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Enter a valid email (example: abc@gmail.com).";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  } else if (!/\d/.test(password)) {
    errors.password = "Password must contain at least one number.";
  }

  if (!phone) {
    errors.phone = "Phone is required.";
  } else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Phone must be 10 digits and start with 6-9.";
  }

  if (!gender) {
    errors.gender = "Please select a gender.";
  }

  if (hobbies.length === 0 || !hobbies.every((hobby) => typeof hobby === "string")) {
    errors.hobbies = "Select at least one hobby.";
  }

  if (!city) {
    errors.city = "Please select a city.";
  }

  return errors;
}
