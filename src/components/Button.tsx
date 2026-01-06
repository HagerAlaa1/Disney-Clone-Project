import React from 'react'
interface ButtonProps {
    children: React.ReactNode;
    className?: string
}

function Button(props: ButtonProps) {
  return (
    <button className={` bg-linear-to-r from-[#095ae6] to-[#062794] flex items-center justify-center rounded-md ${props.className}`}>
      {props.children}
    </button>
  )
}

export default Button
