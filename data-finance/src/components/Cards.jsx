import React from 'react'
import single from '../assets/single.png';


const Cards = () => {
  return (
    <div className='w-full py-110reml px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto' grid md:grid-cols-3 gap-8>
        <div className='w-full border'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p>$149</p>
            <div className=''>
                <p>500 GB Storage</p>
                <p>1 Granted User</p>
                <p>Send up to 2 GB</p>
            </div>
            <button>Start Trial</button>
        </div>
    
    
    </div>

    
    </div>
  )
}

export default Cards;