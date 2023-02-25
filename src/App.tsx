import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Theme } from './Theme';

function App() {
  return (
    <div>
      <ChakraProvider theme={Theme}>
        <Home />
      </ChakraProvider>
    </div>
  );
}

export default App;
