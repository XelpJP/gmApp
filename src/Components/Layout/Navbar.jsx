import React, { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"
import { headerData } from '../utils/data';
import { FaPowerOff, FaShoppingCart } from "react-icons/fa";



const Navbar = () => {

  const messages = [
    'FREE Shipping On Orders above 500/-',
    'FREE Shipping On Orders above 500/-',
    'FREE Shipping On Orders above 500/-',
    'FREE Shipping On Orders above 500/-',
    'FREE Shipping On Orders above 500/-',
    'FREE Shipping On Orders above 500/-',
  ];
  const slideHorizontalKeyframes = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

  const slideHorizontalAnimation = `${slideHorizontalKeyframes} 35s linear infinite`;
  const navigate = useNavigate();
  const [name, setName] = useState('Home')

  const handleNavigation = (title) => {
    setName(title)
    if (title === 'Home') {
      navigate('home')
    }
    if (title === 'Shop All') {
      navigate('shopall')
    }
    if (title === 'About us') {
      navigate('aboutUs')
    }
    if (title === 'Track Your Order') {
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
          {headerData.map((item, index) => {
            let IconComponent = null;
            if (item.iconType === 'cart') IconComponent = <FaShoppingCart size={22} />;
            if (item.iconType === 'user') IconComponent = <FaPowerOff size={22} />;

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



