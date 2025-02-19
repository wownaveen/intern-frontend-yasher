// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Button = ({name}) => {
  return (
    <button className='bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-900 transition w-full'>{name}</button>
  )
}

export default Button