import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import Error from "./pages/Error";
import { Theme } from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Elections from './pages/Elections';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout/>,
    errorElement:<Error/>,
    children: [
      { path: '/', element: <Home/>},
      { path: '/elections', element: <Elections/>},
    ]
  }
]);

function App() {
  return (
    <div>
      <ChakraProvider theme={Theme}>
        <RouterProvider router={router}/> 
      </ChakraProvider>
    </div>
  );
}

export default App;
