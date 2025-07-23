import React, { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { ThemeContext } from './contexts';
import routes from './routes/routes';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App' data-theme={theme}>
        <RouterProvider router={routes} />
      </div>
    </ThemeContext.Provider>
  )
}
