import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'


//npm create vite@4.1.0
//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//npm install bootstrap@5.3.2
//npm i axios


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <App />
    </ChakraProvider> 
  </React.StrictMode>,
)
