import React from 'react'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  }

  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 h-[100vh] flex justify-center items-center'>
      <div className='glass shadow-xl rounded-xl p-10 w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%]'>
        <h1 className='text-xl font-bold underline mb-2 text-center text-white'>Sign In Here</h1>

        <form className='flex flex-col gap-4'>
          <input placeholder='Email' className='px-3 py-2 rounded-xl border border-gray-300' />
          <input placeholder='Password' className='px-3 py-2 rounded-xl border border-gray-300' />
          <div className='flex gap-4 justify-center mt-4'>
            <Button label={"SignIn"} className={"bg-red-700 rounded-lg px-4 py-2 text-white shadow-lg hover:bg-red-300 hover:text-black"} onClick={handleClick} />
            <Button label={"SignUp"} className={"bg-[#002D62] rounded-lg px-4 py-2 text-white shadow-lg hover:bg-red-300 hover:text-black"} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
