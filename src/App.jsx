import React, { useState } from 'react'

import './App.css'

export const App = () => {
  const [isDarkMode, setIsDarkModa] = useState(true);

  return (
    <div className='App' data-theme={isDarkMode ? 'dark' : 'light'}>
      <h1 className='title'>Alphaz APP +</h1>

      <button onClick={() => setIsDarkModa(!isDarkMode)}>
        Trocar tema
      </button>
    </div>
  )
}
