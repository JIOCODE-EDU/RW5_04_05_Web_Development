import React from 'react'
import { profile } from '../data'

const Footer = () => {
  return (
    <footer>
      <p>{new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <div>
        {
          profile.links.map((link) => (
            <a key={link.label} href={link.href} target='_blank'>{link.label}</a>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer