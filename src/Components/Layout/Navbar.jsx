import React, { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"
import { headerData } from '../utils/data';
import { FaPowerOff, FaShoppingCart, FaShippingFast, FaHome } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";



const Navbar = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Home')

  const handleNavigation = (title) => {
    setName(title)
    if (title === 'Home') {
      navigate('home')
    }
    if (title === 'TrackYourOrder') {
      navigate('trackOrder')
    }
    if (title === 'Logout') {
      navigate('login')
    }
  };

  useEffect(() => {
    if (name == "Home") {
      navigate('home')
    }
  }, [])

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-white flex justify-between px-10 py-5 shadow-lg '>
      <div className=''>
        <img src={logo} className='w-10 h-10 object-contain' />
      </div>
      <div className=''>
        <ul className='flex justify-center align-middle gap-10  mt-2'>
          <div className="relative w-full max-w-sm">
            <input
              className="w-full p-1 px-4  border-[1.3px] border-gray-200 rounded-2xl focus:outline-none"
              placeholder="Search Here....."
            />
            <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
          </div>

          {headerData.map((item, index) => {
            let IconComponent = null;
            if (item.iconType === 'home') IconComponent = <FaHome size={22} />;
            if (item.iconType === 'cart') IconComponent = <FaShoppingCart size={22} />;
            if (item.iconType === 'user') IconComponent = <FaPowerOff size={22} />;
            if (item.iconType === 'trackOrder') IconComponent = <FaShippingFast size={22} />;


            return (
              <li
                key={index}
                className='cursor-pointer flex items-center gap-1 hover:text-blue-600 relative group'
                onClick={() => handleNavigation(item.title)}
              >
                {IconComponent ? IconComponent : <span>{item.title}</span>}

                {IconComponent && (
                  <span className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </span>
                )}
              </li>
            );
          })}

        </ul>

      </div>
    </nav>
  )
}

export default Navbar



