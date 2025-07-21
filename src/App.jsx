import React, { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer';

export const App = () => {
  const [isDarkMode, _] = useState(true);

  return (
    <div className='App' data-theme={isDarkMode ? 'dark' : 'light'}>
      <h1 className='title'>Alphaz APP +</h1>

      <Footer />
    </div>
  )
}
