"use client";

import { useState , useEffect } from "react";


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

export default function StudentForm(){
  const [formData , setFormData] = useState(emptyForm)

  const [error , setError] = useState({})

  const [saving , setSaving] = useState(false)

  function handleChange(e){
    const {name , value} = e.target
    setFormData({...formData , [name]:value})
  }

  function handleHobbyChange(e){
    const {value , checked} = e.target
    if(checked){
      setFormData({...formData , hobbies:[...formData.hobbies , value]})
    }else{
      setFormData({...formData , hobbies:formData.hobbies.filter((h) => h !== value)})
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const foundErrors = 
  }

  
}