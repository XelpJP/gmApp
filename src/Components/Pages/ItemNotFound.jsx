import React from 'react'
import noitem from "../../assets/noitem.webp"

const ItemNotFound = () => {

  return (
    <>
      <p className='text-center mt-4 font-bold text-red-500'>Item Not Found!</p>
      <div className='flex justify-center align-middle'>

        <img src={noitem} className='w-[20%] h-[20%] object-contain ' />
      </div>
    </>

  )
}

export default ItemNotFound