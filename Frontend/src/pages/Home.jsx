import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Logos from '../component/Logos'
import { ExploreCourses } from '../component/ExploreCourses'

const Home = () => {
  return (
    <div className='w-full overflow-hidden bg-[#E8F6F3] '>
      
      <div className="w-full relative" >
       <Nav />
        <Hero />
      </div>
      <Logos />
      <ExploreCourses />
    </div>
  )
}

export default Home