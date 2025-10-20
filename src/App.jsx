import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import '../src/language/i18n'
// eslint-disable-next-line no-unused-vars
import i18next from 'i18next'
import './App.css'
import { ThemeContext } from './contexts';
import routes from './routes/routes';
import { getItemFromStorage } from './global/lib';

export const App = () => {
  const [theme, setTheme] = useState('dark');
    const [viewMode, setViewMode] = useState('web');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 767) {
        setViewMode('mobile');
      } else {
        setViewMode('web');
      }
    }

    const userTheme = getItemFromStorage('theme');
    if (userTheme) {
      setTheme(userTheme);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='App' data-theme={theme} view-mode={viewMode}>
        <RouterProvider router={routes} />
      </div>
    </ThemeContext.Provider>
  )
}
