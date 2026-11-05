"use client";

import { useState, useEffect, type ChangeEvent, type SubmitEvent, FormEvent } from "react";
import { StudentInput, ValidationErrors } from "@/lib/types";
import { validateStudent } from "@/lib/validate";

const CITIES = ["Surat", "Ahmedabad", "Vadodara", "Rajkot", "Mumbai", "Delhi"];

const HOBBIES = ["Codeing", "Cricket", "Reading", "Music", "Travelling"]

const emptyForm = {
  name: "",
  email: "",
  password: "",
  phone: "",
  gender: "",
  hobbies: [],
  city: ""
}

type StudentFormProps = {
  onStudentAdded?: () => Promise<void>;
}

export default function StudentForm({ onStudentAdded }: StudentFormProps) {

  const [formData, setFormData] = useState<StudentInput>(emptyForm)

  const [error, setError] = useState<ValidationErrors>({})

  const [saving, setSaving] = useState(false)

  const [message, setMessage] = useState("")

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleHobbyChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target
    if (checked) {
      setFormData({ ...formData, hobbies: [...formData.hobbies, value] })
    } else {
      setFormData({ ...formData, hobbies: formData.hobbies.filter((h) => h !== value) })
    }
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {

    event.preventDefault()

    setMessage("")

    const validationError = validateStudent(formData)
    setError(validationError)

    if (Object.keys(validationError).length > 0) return;

    setSaving(true);

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        setError(result.error ?? {})
        return;
      }

      setFormData(emptyForm)
      setError({})
      setMessage("Student added successfully.")

      onStudentAdded?.()


    } catch (error) {
      setMessage("Student not added pLease try later.")
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center py-2 bg-gray-300 p-10">
        <form className="w-lg mx-auto p-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_name"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
            <div>
              {error.name && <p className="text-sm text-red-600">{error.name}</p>}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email address
            </label>
            <div>
              {error.email && <p className="text-sm text-red-600">{error.email}</p>}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Password
            </label>
            <div>
              {error.password && <p className="text-sm text-red-600">{error.password}</p>}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_phone"
              className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone number
            </label>
            <div>
              {error.phone && <p className="text-sm text-red-600">{error.phone}</p>}
            </div>
          </div>
          <div className="mb-5 flex">
            <legend className="text-sm text-body">Gender</legend>
            <div className="flex ml-4">
              {
                ["Male", "Female", "Other"].map((gender) => (
                  <div key={gender} className="flex items-center mb-4">
                    <input type="radio" name="gender" value={gender} id={gender} className="w-4 h-4 text-brand bg-default-medium border-default-medium focus:ring-brand" />
                    <label htmlFor={gender} className="ml-2 text-sm text-body">{gender}</label>
                  </div>
                ))
              }
              {
                error.gender && <p className="text-sm text-red-600">{error.gender}</p>
              }
            </div>
          </div>
          <div className="mb-5 flex space-x-4">
            <legend className="text-sm me-4 text-body">Hobbies</legend>
            {
              HOBBIES.map((hobby) => (
                <div key={hobby} className="items-center mb-2">
                  <input type="checkbox" name="hobbies" value={hobby} id={hobby} className="w-4 h-4 text-brand bg-default-medium border-default-medium focus:ring-brand" />
                  <label htmlFor={hobby} className="ml-1 text-sm text-body">{hobby}</label>
                </div>
              ))
            }
            {
              error.hobbies && <p className="text-sm text-red-600">{error.hobbies}</p>
            }
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <select
              name="city"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            > 
              <option value="">Select City</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city} 
                </option>
              ))}
            </select>
            <div>
              {error.city && <p className="text-sm text-red-600">{error.city}</p>}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-full text-sm w-full py-2.5 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )

}