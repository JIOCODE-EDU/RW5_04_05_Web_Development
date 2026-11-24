import React from 'react'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {

  const navigate = useNavigate()

  return (
    <>
    <div>NewProduct</div>
    <button onClick={() => navigate('/')}>Home Page</button>
    </>

  )
}

export default NewProduct