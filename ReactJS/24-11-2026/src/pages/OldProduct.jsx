import React from 'react'
import { useNavigate } from 'react-router-dom'

const OldProduct = () => {

  const navigate = useNavigate();

  return (
    <>
    <div>OldProduct</div>
    <button onClick={() => navigate('/')}>Home Page</button>
    </>
  )
}

export default OldProduct