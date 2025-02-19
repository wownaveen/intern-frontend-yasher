/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import saly from '../images/saly.png'
const Image = ({sign}) => {
  return (
    <div className="flex-1 flex-col justify-items-center bg-[rgba(0,8,66,1)] rounded-lg ">
            <img className="max-w-md" src={saly} alt="Image of Saly" />
            <div className="p-10  ml-auto">
              <h1 className="text-2xl font-bold text-white ">{sign} to name</h1>
              <p className="text-white ">Lorem Ipsum is simply </p>
            </div>
          </div>
  )
}

export default Image