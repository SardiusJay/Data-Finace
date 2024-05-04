import React from 'react'
import Laptop from '../assets/Laptop.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img src={Laptop} alt="/" />
            <div className=''>
                <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold '>Manage Data Analytics Centrally</h1>
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
        
        </div>
    
    </div>
  )
}

export default Analytics