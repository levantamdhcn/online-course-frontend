import React from 'react'
import BannerImage from 'assets/images/banner-2.jpg'
import Feature from '../Features/Feature'

const Banner = () => {
  return (
    <div className='cover-image'>
        <div className="banner">
          <img src={ BannerImage } alt="" />
        </div>
        <Feature />
    </div>
  )
}

export default Banner