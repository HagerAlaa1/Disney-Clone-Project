import React from 'react'

type containerProps = {
    children: React.ReactNode
}

function Container({children}: containerProps) {
  return (
    <div className='mx-6.5'>
      {children}
    </div>
  )
}

export default Container
