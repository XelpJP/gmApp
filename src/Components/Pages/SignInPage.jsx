import React from 'react'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import main from "../../assets/hello.webp"
import { useForm } from 'react-hook-form';

const SignInPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    navigate('/home');

  }

  const handleClick = (e) => {
    e.preventDefault();
  };


  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className='relative w-full h-screen'>
      {/* Background Image */}
      <img src={main} alt='background' className='w-full h-full object-cover' />

      {/* Glass Mask Overlay */}
      <div className='absolute top-0 left-0 w-full h-full black/30 backdrop-blur-sm flex items-center justify-center'>
        {/* Login Box */}
        <div className='p-10 rounded-2xl shadow-lg w-[90%] max-w-md'>
          <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
            <h2 className=' text-center text-2xl font-bold'>Sign In</h2>
            <input
              type='email'
              placeholder='Email'
              className='px-4 py-2 rounded-xl white/60 backdrop-blur-sm focus:outline-none'
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors?.mail && <p role="alert" className='text-red-600'>{errors?.mail?.message}</p>}
            <input
              type='password'
              placeholder='Password'
              className='px-4 py-2 rounded-xl white/60 backdrop-blur-sm focus:outline-none'
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors?.password ? "true" : "false"}
            />
            {errors.mail && <p role="alert" className='text-red-600'>{errors?.password?.message}</p>}

            <div className='flex gap-4 justify-center mt-3'>
              <Button
                label={"SignIn"}
                className={"red-700 rounded-lg px-4 py-2  shadow-md hover:red-500 hover:"}
                // onClick={handleClick}
                type="submit"
              />
              <Button
                label={"SignUp"}
                className={"[#002D62] rounded-lg px-4 py-2  shadow-md hover:blue-500 hover:"}
                onClick={handleRegister}

              />
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default SignInPage;
