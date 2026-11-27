"use client";

import { useState , useEffect , type ChangeEvent , type SubmitEvent, FormEvent } from "react";
import { StudentInput , ValidationErrors } from "@/lib/types";
import { validateStudent } from "@/lib/validate";

const CITIES = ["Surat" , "Ahmedabad" , "Vadodara" , "Rajkot" , "Mumbai" , "Delhi"];

const HOBBIES = ["Codeing" ,"Cricket" ,"Reading" , "Music" , "Travelling"]

const emptyForm = {
  name:"",
  email:"",
  password:"",
  phone:"",
  gender:"",
  hobbies:[],
  city:""
}

type StudentFormProps = {
  onStudentAdded?: () => Promise<void>;
}

export default function StudentForm(){

  const [formData , setFormData] = useState<StudentInput>(emptyForm)

  const [error , setError] = useState<ValidationErrors>({})

  const [saving , setSaving] = useState(false)

  const [message , setMessage] = useState("")

  function handleChange(event:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    const {name , value} = event.target
    setFormData({...formData , [name]:value})
  }

  function handleHobbyChange(event:ChangeEvent<HTMLInputElement>){
    const {value , checked} = event.target
    if(checked){
      setFormData({...formData , hobbies:[...formData.hobbies , value]})
    }else{
      setFormData({...formData , hobbies:formData.hobbies.filter((h) => h !== value)})
    }
  }

  async function handleSubmit(event:SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    setMessage("")

    const validationError = validateStudent(formData)
    setError(validationError)

    if(Object.keys(validationError).length > 0) return;

    setSaving(true);

    try{
      const response = await fetch("/api/students" , {
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body:JSON.stringify(formData)
      })

      const result = await response.json()

      if(!response.ok){
        setError(result.error ?? {})
        return;
      }

      setFormData(emptyForm)
      setError({})
      setMessage("Student added successfully.")

      onStudentAdded?.()


    }catch(error){
        setMessage("Student not added pLease try later.")
    }finally{
      setSaving(false)
    }
  }

  
}

function onStudentAdded() {
  throw new Error("Function not implemented.");
}
