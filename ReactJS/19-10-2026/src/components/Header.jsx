import React from 'react'
import { useState } from 'react'
import {profile} from '../data'

const Header = () => {

  const [open , setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header>
      <a href="">{profile.name}</a>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'open' : 'nav'}>
        <a href="#home" onClick={close}>Home</a>
        <a href="#work" onClick={close}>Work</a>
        <a href="#contact" onClick={close}>Contact</a>
      </nav>
    </header>
  )
}

export default Header