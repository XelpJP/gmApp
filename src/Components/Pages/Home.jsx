import React, { useState } from 'react';
import Card from '../UI/Card';
import { picklesData } from '../utils/data';
import Button from '../UI/Button';
import { GoStarFill, GoStar } from "react-icons/go";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';
import ItemNotFound from './ItemNotFound';

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);
  const [result, setResult] = useState(picklesData);

  const handleRedirect = () => {
    navigate('/desc');
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim().toLowerCase();

    const handleFilter = picklesData.filter(pickle =>
      pickle.name.toLowerCase().includes(trimmedTerm)
    );

    if (handleFilter.length === 0) {
      setFound(false);
      setResult([]);
    } else {
      setFound(true);
      setResult(handleFilter);
    }
  };

  return (
    <div className='mt-[3rem] example'>
      <div>
        <Banner />
      </div>

      <div className='flex justify-center mt-3 gap-2'>
        <input
          placeholder='Search here....'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='px-4 border-2 border-gray-500 rounded-lg'
        />
        {
          !found ? (
            <Button
              label={"Refresh"}
              className={"bg-red-600 rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-400 hover:text-black"}
              onClick={() => window.location.reload()}
            />
          ) : (
            <Button
              label={"Search"}
              className={"bg-[#002D62] rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-300 hover:text-black"}
              onClick={handleSearch}
            />
          )
        }
      </div>
      {!found ? (
        <div className='mb-5'><ItemNotFound /></div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4 px-10 mb-5'>
          {result?.map((item) => (
            <Card key={item.id}>
              <>
                <img src={item.url} alt='product' className='w-[150px] h-[100px] object-contain rounded-lg mx-auto' />
                <div className='px-5 py-5'>
                  <p className='mt-2 text-md font-bold text-center underline text-gray-500' onClick={handleRedirect}>
                    {item.name}
                  </p>
                  <p className='mt-2 text-md font-bold'>
                    Price: ₹{item.price} <span className='text-xs font-thin'>500 gms</span>
                  </p>
                  <div className='flex items-center gap-1 mt-2'>
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(item.rating)
                        ? <GoStarFill key={i} className='text-yellow-400' />
                        : <GoStar key={i} className='text-gray-300' />
                    )}
                    <span className='text-sm text-gray-600 ml-1'>({item.rating})</span>
                  </div>
                  <div className='flex gap-4 mt-2 text-sm text-gray-700 justify-between'>
                    <div className='flex gap-10'>
                      <p><FaThumbsUp className='text-green-500' /> {item.likes}</p>
                      <p><FaThumbsDown className='text-red-500' /> {item.dislikes}</p>
                    </div>
                    <div>
                      {item.selectOne ? (
                        <span className='flex items-center gap-1'><IoHeartOutline className='text-red-500' /></span>
                      ) : (
                        <span className='flex items-center gap-1'><IoHeartSharp className='text-red-500' /></span>
                      )}
                    </div>
                  </div>
                  <div className='flex gap-5 mt-3'>
                    <Button label={"Buy"} className={"bg-[#002D62] rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-300 hover:text-black"} />
                    <Button label={"Add"} className={"bg-[#006255] rounded-lg px-2 py-1 text-white shadow-lg hover:bg-red-300 hover:text-black"} />
                  </div>
                </div>
              </>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
