import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Box,Text } from '@chakra-ui/react'
import Root from './Components/Rotes/Root'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
     <Root/>
    </Box>
  )
}

export default App
