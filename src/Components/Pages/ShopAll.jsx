import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ShopAll = () => {
  const allitems=[
    {id:1,url:'https://vellankifoods.com/cdn/shop/products/andhra_avakaya_pickle_mango.jpg?v=1679897008',price:260},
    {id:2,url:'https://i0.wp.com/veenapatwardhan.com/pat-a-cake/wp-content/uploads/2024/05/Sweet-and-Spicy-Lime-Pickle.png?resize=500%2C400&ssl=1',price:250},
    {id:3,url:'https://www.sailusfood.com/wp-content/uploads/2015/08/andhra-tomato-pickle.jpg',price:200},
    {id:4,url:'https://nativespecial.com/franchise/wp-content/uploads/sites/10/2023/08/Guntur-Red-Chilli-Pickle-DP.jpg',price:220},
    {id:5,url:'https://tenaliruchulu.com/cdn/shop/files/0Z0A1649.jpg?v=1714810404',price:230},
    {id:6,url:'https://images.aasaan.shop/stores/pavifoods/products/product_images/product_1668408706480.jpeg',price:220},
    {id:7,url:'https://nmfoodsofficial.com/wp-content/uploads/2024/07/mukkaya-pickle.jpg',price:200},
    {id:8,url:'https://i0.wp.com/foodonfarmpickles.com/wp-content/uploads/2023/03/Prawn-pickle-scaled.jpg?fit=2560%2C1708&ssl=1',price:400},
    {id:9,url:'https://tenaliruchulu.com/cdn/shop/files/Screenshot2024-06-15at4.35.42PM.png?v=1718449568',price:370},
    {id:10,url:'https://i0.wp.com/southindia-stastic-assests.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/09182433/Godavari_fish_pickle1.jpeg?fit=540%2C500&ssl=1',price:320}
  ]
  return (
    <Box>
     
   <Box>
   <Grid templateColumns='repeat(4, 1fr)' gap={6}>
   {allitems.map((item)=>(
   <Card maxW='sm'>
   <CardBody>
    <Image
    src={item.url}
    alt='Green double couch with wooden legs'
      height={400} 
      width={500}
      objectFit={"fill"}
    />
    <Box>
      <Text as={"b"}>${item.price}</Text>
      <Text fontSize={"10px"}>500grams</Text>
    </Box>
  </CardBody>
  <CardFooter>
    <ButtonGroup spacing='2'> 
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
  </Card>
   ))}
  </Grid>
      </Box>
    </Box>
  )
}

export default ShopAll
