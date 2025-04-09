import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.jpeg"

const Navbar = () => {
  const headerData = [{ id: 1, title: "Home" }, { id: 2, title: "Shop All" }, { id: 1, title: "About us" }, { id: 1, title: "Track Your Order" }];
  const Icons = [{ id: 1, icon: <FaRegUserCircle size={25} /> }, { id: 2, icon: <MdOutlineShoppingBag size={25} /> }]

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
          {
            headerData && headerData?.map((item, index) => (
              <li className='cursor-pointer' key={index} onClick={() => handleNavigation(item.title)}>
                {
                  item.title
                }
              </li>
            )
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar



