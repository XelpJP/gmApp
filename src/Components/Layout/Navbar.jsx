import { Box, HStack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
   const heders=[{id:1,title:"Home"},{id:2,title:"Shop All"},{id:1,title:"About us"},{id:1,title:"Track Your Order"}];
   const Icons =[{id:1,icon:<FaRegUserCircle size={25}/>},{id:2,icon:<MdOutlineShoppingBag size={25}/>}]
 
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
const navigate =useNavigate();
const[name,setName]=useState('Home')

const handleNavigation=(title)=>{
    setName(title)
    if(title==='Home'){
        navigate('home')
    }
    if(title==='Shop All'){
        navigate('shopall')
    }
    if(title==='About us'){
        navigate('aboutUs')
    }
    if(title==='Track Your Order'){
        navigate('trackOrder')
    }
};

useEffect(()=>{
    if(name=="Home"){
        navigate('home')
    }
},[])

return (
<Box>
        
<Box
w="100%" 
h="50px" 
overflow="hidden" 
position="relative"
bg="#2a4d30"
border="1px solid gray"
display="flex"
alignItems="center"
justifyContent="start"
>
<Box
  display="flex"
  animation={slideHorizontalAnimation} 
  whiteSpace="nowrap"
>
  {messages.map((message, index) => (
    <Text
      key={index}
      fontSize="16px"
      mx="16px" 
      color={"white"}
    >
      {message}
    </Text>
  ))}
</Box>
</Box>

     <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} height={100} width={"100%"} bg={'#d0ab18'} alignItems={"center"} p={5}>
       <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} gap={20}>
            <HStack spacing={5} alignItems={"center"}>
                {heders.map((item)=>(
                <Text as={"b"} fontSize={"18px"} onClick={()=>handleNavigation(item.title)}>{item.title}</Text>
           ))}
             </HStack>

             <Box >
           <Text as={"b"} fontSize={"22px"}>GMAPP</Text>
          </Box>
        </Box>
        
        <Box display={"flex"} flexDirection={"row"} gap={4} alignItems={"center"}>
            {Icons.map((item)=>(
            <Text as={"b"}>{item.icon}</Text>
        ))}
        </Box>

       </Box>
      
     </Box>
 )
}

 export default Navbar



