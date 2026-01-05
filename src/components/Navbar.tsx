import React from 'react'
import LanguageSwitch from './LanguageSwitch'
import LogIn from './LogIn'

function Navbar() {
  return (
    <nav>
       <LanguageSwitch/>
       <LogIn/> 
    </nav>
  )
}

export default Navbar
