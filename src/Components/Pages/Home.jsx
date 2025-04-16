import React, { useState } from 'react';
import Card from '../UI/Card';
import { picklesData } from '../utils/data';
import Button from '../UI/Button';
import { GoStarFill, GoStar } from "react-icons/go";
import { FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Banner from './Banner';
import { useNavigate } from 'react-router-dom';
import ItemNotFound from './ItemNotFound';
import { BiSolidCartAdd } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(true);
  const [result, setResult] = useState(picklesData);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);




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
      <>

      </>

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
                    Price: ₹{item.price} <span className='text-xs font-thin px-2'>500 gms</span>
                  </p>
                  <div className='flex items-center gap-1 mt-2'>
                    {[...Array(5)].map((_, i) =>
                      i < Math.floor(item.rating)
                        ? <GoStarFill key={i} className='text-yellow-400' />
                        : <GoStar key={i} className='text-gray-300' />
                    )}
                    <span>    {item.selectOne ? (
                      <span className='flex items-center gap-1'><IoHeartOutline className='text-red-500' /></span>
                    ) : (
                      <span className='flex items-center gap-1'><IoHeartSharp className='text-red-500' /></span>
                    )}</span>
                  </div>
                  <div className='flex gap-4 mt-2 text-sm text-gray-700 justify-between'>
                  </div>

                  <div className='flex justify-between mt-3'>
                    <FaEye color='#002D62' size="35" onClick={() => {
                      setSelectedItem(item);
                      setShowModal(true);
                    }} />

                    <BiSolidCartAdd size="35" color='green' />
                  </div>
                </div>
              </>
            </Card>
          ))}
        </div>
      )}
      {showModal && selectedItem && (<>
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img src={selectedItem.url} alt={selectedItem.name} className="w-full h-[200px] object-contain mb-4 rounded-lg" />
              <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
              <p className="text-sm text-gray-600 mb-2">Price: ₹{selectedItem.price} (500g)</p>
              <p className="text-sm text-gray-500">Rating: {selectedItem.rating}</p>
              <div className='flex gap-10 mt-2'>
                <p><FaThumbsUp className='text-green-500' /> {selectedItem.likes}</p>
                <p><FaThumbsDown className='text-red-500' /> {selectedItem.dislikes}</p>
              </div>
            </div>
          </div>
        </>
      </>)}

    </div>
  );
};

export default Home;
