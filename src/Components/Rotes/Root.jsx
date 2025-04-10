import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import ShopAll from '../Pages/ShopAll';
import AboutUs from '../Pages/AboutUs';
import TrackOrder from '../Pages/TrackOrder';
import ErrorBoundaryWrapper from '../Pages/ErrorBoundaryWrapper';
import NotFound from '../Pages/NotFound';
import SignInPage from '../Pages/SignInPage';
import AuthRoute from './AuthRoute';
import SignUp from '../Pages/SignUp';
import DescPickles from '../Pages/DescPickles';

const Root = () => {
  return (
    <Router>
      <ErrorBoundaryWrapper>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='home' element={<Home />} />
            <Route path='shopall' element={<ShopAll />} />
            <Route path='aboutUs' element={<AboutUs />} />
            <Route path='trackOrder' element={<TrackOrder />} />
            <Route path='desc' element={<DescPickles />} />


          </Route>
          <Route element={<AuthRoute />}>
            <Route path='login' element={<SignInPage />} />
            <Route path='register' element={<SignUp />} />

            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </ErrorBoundaryWrapper>


    </Router>
  )
}

export default Root
