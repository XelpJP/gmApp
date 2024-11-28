import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import ShopAll from '../Pages/ShopAll';
import AboutUs from '../Pages/AboutUs';
import TrackOrder from '../Pages/TrackOrder';
import ProductsList from '../Pages/ProductList';

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='home' element={<Home />} />
          <Route path='shopall' element={<ShopAll />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='trackOrder' element={<TrackOrder />} />
          <Route path='products' element={<ProductsList />} />

        </Route>

      </Routes>

    </Router>
  )
}

export default Root
