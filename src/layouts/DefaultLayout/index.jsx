import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const DefaultLayout = ({ children }) => {
  return (
    <div>
        <Header />
        <div className="children-wrapper">
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default DefaultLayout