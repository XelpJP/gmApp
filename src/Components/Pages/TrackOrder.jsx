import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import TrackProgress from './TrackProgress';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';

const TrackOrder = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/home')
  }
  return (
    <div className='mt-[6rem] p-10  mx-5 rounded-2xl shadow-lg mb-[1rem]'>
      <p className='text-center font-bold text-xl underline mb-3'>Track your order</p>
      <hr className='border-[0.02px] border-gray-400' />
      <p className='p-1'>My Orders / Tracking</p>
      <hr className='border-[0.02px] border-gray-400' />
      <p className='p-1'>Order ID:0D45345543354543</p>
      <hr className='border-[0.02px] border-gray-400' />
      <div className='flex justify-between mt-2'>
        <div>
          <p className='font-bold'>Estimate Delivery time:</p>
          <p className='text-sm'>29-Nov-2025</p>
        </div>
        <div >
          <p className='font-bold'>Shipping By:</p>
          <p className='flex gap-2 text-sm'>BLUE DART , | <span><PiPhoneCallFill size={17} /></span> +1598675986</p>
        </div>
        <div>
          <p className='font-bold'>Status:</p>
          <p className='text-sm'>Picked by the counter</p>
        </div>
        <div>
          <p className='font-bold'>Tracking #:</p>
          <p className='text-sm'>29-Nov-2025</p>
        </div>

      </div>
      <hr className='border-[0.02px] border-gray-400 mt-2' />

      <TrackProgress />
      <hr className='border-[0.02px] border-gray-400 mt-2' />
      <Button
        label={"< Back to orders "}
        className={"[#002D62] rounded-lg px-2 py-1  shadow-lg hover:red-300 hover: mt-10"}
        onClick={handleSearch}
      />

    </div>
  )
}

export default TrackOrder
