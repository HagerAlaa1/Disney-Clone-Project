import React from 'react'
import LanguageSwitch from './LanguageSwitch'
import LogIn from './LogIn'

function Navbar() {
  return (
    <nav className='flex justify-between items-center md:justify-end md:gap-4 pt-6 pb-2'>
       <LanguageSwitch/>
       <LogIn/> 
    </nav>
  )
}

export default Navbar
