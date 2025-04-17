import React from 'react'
import { FaFacebookSquare, FaYoutubeSquare } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=' p-10 bg-[rgba(0,0,0,0.3)] mb-10 shadow-xl'>
      <main className=' p-10 flex justify-between '>
        <div>
          <h1 className='text-4xl tracking-[.10em]'>Pickle</h1>
          <p>Every one experience taste to love  the pickle</p>
        </div>
        <div className='flex gap-10 '>
          <ul className=''>
            <li className='font-bold text-lg tracking-[.15em]'>Category</li>
            <li>Home</li>
            <li>About</li>

          </ul>
          <ul>
            <li className='font-bold text-lg tracking-[.15em]'>Customers</li>

            <li>Home</li>
            <li>About</li>

          </ul>
          <ul>
            <li className='font-bold text-lg tracking-[.15em]'>All List</li>

            <li>Home</li>
            <li>About</li>

          </ul>

        </div>
        <div className='flex gap-10'>
          <FaFacebookSquare size={30} />
          <FaSquareInstagram size={30} />
          <FaYoutubeSquare size={30} />
          <FaSquareXTwitter size={30} />

        </div>
      </main>
      <div className='flex gap-10 justify-end p-10 font-semibold'>
        <p>Call Us On : +91 9999-876-876</p>
        <p className='underline cursor-pointer'>Send | E-Mail</p>
        <p>USD | English</p>

      </div>
      <>
        <p className='text-center font-semibold '>@2023 PICKLE MART, Inc - All Rights Reserved</p>
      </>
    </div>
  )
}

export default Footer