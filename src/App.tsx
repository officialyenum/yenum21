import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [darkToggle, setDarkToggle] = useState(false)
  return (
    <div className='bg-white dark:bg-black'>
      <Home setDarkMode={setDarkToggle} darkToggle={darkToggle} />
    </div>
  );
}

export default App;
