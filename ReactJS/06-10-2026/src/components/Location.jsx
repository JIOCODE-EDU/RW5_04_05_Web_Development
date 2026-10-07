import React from 'react'
import { useState } from 'react'

// const Location = (props) => {
//   return (
//     <div>
//       <div>Location</div>
//       <p>City:{props.city}</p>
//       <p>State:{props.state}</p>
//       <p>Country:{props.country}</p>
//     </div>
//   )
// }

// props using destructuring

// const Location = ({item1 , item2 , item3}) => {
//   return (
//     <div>
//       <div>Location</div>
//       <p>City:{item1}</p>
//       <p>State:{item2}</p>
//       <p>Country:{item3}</p>
//     </div>
//   )
// }

// const Location = ({city , state , country}) => {
//   return (
//     <div>
//       <div>Location</div>
//       <p>City:{city}</p>
//       <p>State:{state}</p>
//       <p>Country:{country}</p>
//     </div>
//   )
// }

const Location = ({city , state , country}) => {

  return (
    <div>
      <div>Location</div>
      <p>City:{city}</p>
      <p>State:{state}</p>
      <p>Country:{country}</p>
    </div>
  )
}

export default Location