import React from 'react'
import OldProduct from './OldProduct'
import NewProduct from './NewProduct'
import { Link , NavLink , Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div>Product</div>
    <NavLink to="newproduct">New Product</NavLink>
    <NavLink to="oldproduct">Old Product</NavLink>
    <Outlet/>
    </>
  )
}

export default Product