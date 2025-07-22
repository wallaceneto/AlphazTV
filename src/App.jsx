import React, { useState } from 'react'
import './App.css'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className='App' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header theme={isDarkMode} setTheme={setIsDarkMode} />
      
      <h1 className='title'>Alphaz APP +</h1>

      <Footer />
    </div>
  )
}
