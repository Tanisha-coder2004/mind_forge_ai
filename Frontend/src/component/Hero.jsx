import React from 'react'
import hero from "../assets/hero-img.png"
import { SiViaplay } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()
    return (
        <section className='bg-[#093B3B] mx-10 mt-24 lg:min-h-[70vh] rounded-[20px] overflow-hidden'>
            <div className='max-w-[1400px] mx-auto px-6 flex md:flex-row flex-col items-center md:pt-10 pt-15'>
                {/* hero content */}
                <div className='flex-1 text-white space-y-6'>
                    <h1 className='text-4xl lg:text-[64px] font-bold leading-[1.1]'>
                        Grow Your Skills to <br />
                        <span className="text-[#FDC332]">Advance Your</span> <br /> 
                        Career Path
                    </h1>
                    
                    <p className='text-gray-300 text-lg max-w-[500px]'>
                        Learn from industry experts and take your career to the next level with our professional courses.
                    </p>
                    
                    <div className='flex items-center gap-4 pt-4'>

                        <button className='px-5 py-3 bg-[#FDC332] text-black font-bold text-[18px] rounded-full cursor-pointer 
                            hover:bg-yellow-500 transition-all flex items-center justify-center gap-2'  onClick={()=>navigate("/allCourses")}>
                            View all Courses <SiViaplay className='w-5 h-5'/>
                        </button>
                        
                        {/* AI Button - Design ke hisab se styling */}
                        <button className='px-5 py-3 border-2 border-white text-white font-semibold text-[18px] rounded-full 
                            cursor-pointer hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2'>
                            Search with AI
                        </button>

                    {/* <button className='px-5 py-2.5 border text-[18px] rounded-[10px] cursor-pointer 
                    flex items-center justify-center gap-2'>View all Courses <SiViaplay className='w-[30px] h-[30px]'/></button>
                    <button className='px-[20px] py-[10px] border text-[18px] rounded-[10px] cursor-pointer 
                    bg-black text-white flex items-center justify-center gap-2'>Search with Ai</button> */}
                    </div>
                </div>
                {/* hero image */}
                <div className='flex-1 flex justify-center'>
                    <img src={hero} alt="Hero image" />
                </div>
            </div>
        </section>
    )
}

export default Hero