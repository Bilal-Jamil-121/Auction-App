import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='md:flex pt-2 md:px-17 md:mx-0 mx-3 gap-4'>
      <div className='md:w-1/2 md:rounded-2xl shadow-xl bg-blue-500 text-white flex flex-col justify-center items-center p-10'>
        <h1 className='text-5xl font-bold mb-6'>Welcome to BidMaster</h1>
            <p className='text-lg mb-8'>Your ultimate platform for online auctions and bidding.</p>
            <button className='bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition duration-300'> <Link to="/Login">Get Started</Link></button>
      </div>
      <div className='md:w-1/2 flex items-center justify-center relative md:my-0 h-80 my-2 overflow-hidden md:rounded-2xl shadow-xl'>
  <img
    className='w-full h-full  object-cover transition-transform duration-500 hover:scale-105'
    src="Bid.jfif"
    alt="Auctions"
  />
  <div className="absolute inset-0 bg-linear-to-r from-black/20 to-transparent"></div>
</div>

    </div>
  )
}

export default Hero