import React from 'react'
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export const HomepageLayout = ({ children }) => {

  return (
    <>
      <Banner />
      {children}
      <Footer />
    </>
  )
}

