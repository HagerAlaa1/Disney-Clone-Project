import React from 'react'

type containerProps = {
    children: React.ReactNode,
    className?: string
}

function Container(props: containerProps) {
  return (
    <div className='mx-6.5'>
      {props.children}
    </div>
  )
}

export default Container
