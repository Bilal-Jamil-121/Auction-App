import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:flex pt-2 md:px-17 gap-2'>
      <div className='md:w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-10'>
        <h1 className='text-5xl font-bold mb-6'>Welcome to BidMaster</h1>
            <p className='text-lg mb-8'>Your ultimate platform for online auctions and bidding.</p>
            <button className='bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition duration-300'> <Link to="/Login">Get Started</Link></button>
      </div>
      <div className='md:w-1/2'>
        <img  
        className='w-full bg-cover h-full object-cover'
          src="images.jfif" 
          alt="Auctions"></img>
    </div>
    </div>
  )
}

export default Hero