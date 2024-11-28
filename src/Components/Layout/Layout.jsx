import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Box as="header" flex="0 0 auto">
        <Navbar />
      </Box>

      <Box as="main" flex="1" overflowY="auto" >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
