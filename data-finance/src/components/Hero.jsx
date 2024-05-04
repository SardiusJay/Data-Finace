import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-96px] w-fall h-screen mx-auto text-center flex flex-col justify-center'>
    <p className=' text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>

    <div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible finanacing for </p>

    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-3'
    strings={[
        "BTB",
        "BTC",
        "SASS"
      ]}
      typeSpeed={120}
      backSpeed={140}
      loop
      />
    </div>

    
    </div>
    
    </div>
  )
}

export default Hero;