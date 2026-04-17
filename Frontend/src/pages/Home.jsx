import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Logos from '../component/Logos'
import { ExploreCourses } from '../component/ExploreCourses'
import CardPage from '../component/CardPage'
import getPublishedCourse from '../customHooks/getPublishedCourse'

const Home = () => {
  getPublishedCourse()
  return (
    <div className='w-full overflow-hidden bg-[#E8F6F3] '>
      
      <div className="w-full relative" >
       <Nav />
        <Hero />
      </div>
      <Logos />
      <ExploreCourses />
      <CardPage/>
    </div>
  )
}

export default Home