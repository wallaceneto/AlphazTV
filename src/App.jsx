import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer';
import Banner from './components/Banner';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className='App' data-theme={isDarkMode ? 'dark' : 'light'}>
      <Banner isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className='content'>
        <p>
          O Alphaz TV+ é um site feito de fãs para fãs, que visa reunir e divulgar o trabalho do XG. Todo conteúdo apresentado respeita o direto de propriedade da XGALX.
        </p>
      </div>

      <div className='content'>
        <p>
          O Alphaz TV+ é um site feito de fãs para fãs, que visa reunir e divulgar o trabalho do XG. Todo conteúdo apresentado respeita o direto de propriedade da XGALX.
        </p>
      </div>

      <Footer />
    </div>
  )
}
