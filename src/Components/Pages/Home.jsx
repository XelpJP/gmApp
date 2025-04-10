import React from 'react'
import Card from '../UI/Card'
import { picklesData } from '../utils/data'
import Button from '../UI/Button'
import { GoStarFill, GoStar } from "react-icons/go";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Banner from './Banner';

const Home = () => {
  return (
    <div className='mt-[3rem] '>
      {/* <p className='text-center text-2xl font-bold'>Pickles</p> */}
      <div className=''>
        <Banner />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 px-10'>
        {
          picklesData && picklesData?.map((item, index) => (
            <Card key={item.id}>
              <>
                <img src={item.url} alt='product' className='w-[150px] h-[100px] object-contain rounded-lg mx-auto' />
                <div className='px-5   py-5'>
                  <p className='mt-2 text-md font-bold text-center underline text-gray-500'> {item.name}</p>
                  <p className='mt-2 text-md font-bold'>Price: ₹{item.price} <span className='text-xs font-thin'>500 gms</span></p>
                  <div className='flex items-center gap-1 mt-2'>
                    {[...Array(5)].map((_, i) => (
                      i < Math.floor(item.rating)
                        ? <GoStarFill key={i} className='text-yellow-400' />
                        : <GoStar key={i} className='text-gray-300' />
                    ))}
                    <span className='text-sm text-gray-600 ml-1'>({item.rating})</span>
                  </div>
                  <div className='flex gap-4 mt-2 text-sm text-gray-700 justify-between'>
                    <div className='flex gap-10'>
                      <p className=''><FaThumbsUp className='text-green-500' /> {item.likes}</p>
                      <p className=''><FaThumbsDown className='text-red-500' /> {item.dislikes}</p>
                    </div>
                    <div>
                      {
                        item.selectOne ? (<span className='flex items-center gap-1'><IoHeartOutline className='text-red-500' /> </span>) : (<span className='flex items-center gap-1'><IoHeartSharp className='text-red-500' /> </span>)
                      }
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <Button label={"Buy"} className={"bg-[#002D62] rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-300 hover:text-black"} />
                    <Button label={"Add"} className={"bg-[#006255] rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-300 hover:text-black"} />
                  </div>
                </div>
              </>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Home
