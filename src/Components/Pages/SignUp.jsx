import React from 'react'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import main from "../../assets/bgpickle.webp"

const SignUp = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className='relative w-full h-screen'>
      <img src={main} alt='background' className='w-full h-screen object-cover' />

      <div className='absolute top-0 left-0 w-full h-full black/30 backdrop-blur-sm flex items-center justify-center'>
        <div className='white/20 backdrop-blur-lg p-10 rounded-2xl shadow-lg w-[90%] max-w-md'>
          <form className='flex flex-col gap-5'>
            <h2 className=' text-center text-2xl font-bold'>Sign Up</h2>
            <input
              type='email'
              placeholder='Email'
              className='px-4 py-2 rounded-xl white/60 backdrop-blur-sm focus:outline-none'
            />
            <input
              type='password'
              placeholder='Password'
              className='px-4 py-2 rounded-xl white/60 backdrop-blur-sm focus:outline-none'
            />
            <input
              type='confirm-password'
              placeholder='Password'
              className='px-4 py-2 rounded-xl white/60 backdrop-blur-sm focus:outline-none'
            />
            <div className='flex gap-4 justify-center mt-3'>
              <Button
                label={"SignIn"}
                className={"red-700 rounded-lg px-4 py-2  shadow-md hover:red-500 hover:"}
                onClick={handleClick}
              />
              <Button
                label={"SignUp"}
                className={"[#002D62] rounded-lg px-4 py-2  shadow-md hover:blue-500 hover:"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
