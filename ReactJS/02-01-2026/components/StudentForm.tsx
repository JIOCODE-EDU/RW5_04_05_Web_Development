"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { validateStudent } from "@/lib/validate";
import type { StudentInput, ValidationErrors } from "@/lib/types";

const CITIES = ["Surat", "Ahmedabad", "Vadodara", "Rajkot", "Mumbai", "Delhi"];
const HOBBIES = ["Coding", "Reading", "Cricket", "Music", "Travelling"];

const emptyForm: StudentInput = {
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  hobbies: [],
  city: "",
};

type StudentFormProps = {
  onStudentAdded?: () => Promise<void>;
};

export default function StudentForm({ onStudentAdded }: StudentFormProps) {
  const [formData, setFormData] = useState<StudentInput>(emptyForm);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleHobbyChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      hobbies: checked
        ? [...current.hobbies, value]
        : current.hobbies.filter((hobby) => hobby !== value),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const validationErrors = validateStudent(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSaving(true);
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors ?? {});
        return;
      }

      setFormData(emptyForm);
      setErrors({});
      setMessage("Student added successfully.");
      await onStudentAdded?.();
    } catch {
      setMessage("Could not save the student. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function inputClass(field: keyof ValidationErrors) {
    return `form-control${errors[field] ? " is-invalid" : ""}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" name="name" className={inputClass("name")} value={formData.name} onChange={handleChange} placeholder="Enter full name" />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input id="email" type="email" name="email" className={inputClass("email")} value={formData.email} onChange={handleChange} placeholder="Enter email" />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input id="password" type="password" name="password" className={inputClass("password")} value={formData.password} onChange={handleChange} placeholder="Min 6 characters with a number" />
        <div className="invalid-feedback">{errors.password}</div>
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input id="phone" name="phone" maxLength={10} className={inputClass("phone")} value={formData.phone} onChange={handleChange} placeholder="10 digit mobile number" />
        <div className="invalid-feedback">{errors.phone}</div>
      </div>

      <fieldset className="mb-3">
        <legend className="form-label fs-6">Gender</legend>
        {["Male", "Female", "Other"].map((gender) => (
          <div className="form-check form-check-inline" key={gender}>
            <input id={`gender-${gender}`} className="form-check-input" type="radio" name="gender" value={gender} checked={formData.gender === gender} onChange={handleChange} />
            <label className="form-check-label" htmlFor={`gender-${gender}`}>{gender}</label>
          </div>
        ))}
        {errors.gender && <div className="text-danger small">{errors.gender}</div>}
      </fieldset>

      <fieldset className="mb-3">
        <legend className="form-label fs-6">Hobbies</legend>
        {HOBBIES.map((hobby) => (
          <div className="form-check form-check-inline" key={hobby}>
            <input id={`hobby-${hobby}`} className="form-check-input" type="checkbox" value={hobby} checked={formData.hobbies.includes(hobby)} onChange={handleHobbyChange} />
            <label className="form-check-label" htmlFor={`hobby-${hobby}`}>{hobby}</label>
          </div>
        ))}
        {errors.hobbies && <div className="text-danger small">{errors.hobbies}</div>}
      </fieldset>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <select id="city" name="city" className={`form-select${errors.city ? " is-invalid" : ""}`} value={formData.city} onChange={handleChange}>
          <option value="">-- Select City --</option>
          {CITIES.map((city) => <option key={city} value={city}>{city}</option>)}
        </select>
        <div className="invalid-feedback">{errors.city}</div>
      </div>

      <button type="submit" className="btn btn-primary" disabled={saving}>
        {saving ? "Saving..." : "Add Student"}
      </button>
      {message && <p className="mt-3 mb-0" role="status">{message}</p>}
    </form>
  );
}
