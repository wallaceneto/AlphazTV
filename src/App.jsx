import React, { useState } from 'react'
import './App.css'
import { ThemeContext } from './contexts';
import Home from './pages/Home';
import Songs from './pages/Songs';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App' data-theme={theme}>
        <Songs />
      </div>
    </ThemeContext.Provider>
  )
}
