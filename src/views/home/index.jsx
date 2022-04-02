import React from 'react'
import Banner from './Banner/Banner'
import PopularCoursesList from './PopularList/PopularCoursesList/PopularCoursesList'
import PopularCategoryList from './PopularList/PopularCategoryList/PopularCategoryList'

const Home = () => {
  return (
    <div className='home-page'>
        <Banner />
        <PopularCoursesList />
        <PopularCategoryList />
    </div>
  )
}

export default Home