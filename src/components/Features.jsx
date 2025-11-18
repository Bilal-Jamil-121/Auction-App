import React from 'react'

const Features = () => {
  return (
    <div className='px-17'>
        <div className='text-center py-12'>
            <h2 className='text-4xl font-bold mb-4'>Platform Features</h2>
            <p className='text-lg text-gray-600'>Discover the amazing features that make BidMaster your go-to auction platform.</p>
        </div>
        <div className='md:flex md:justify-center md:gap-8 px-4'>
            <div className='md:w-1/3  bg-gray-200 hover:bg-gray-300 shadow-lg rounded-lg p-6 mb-6 md:mb-0'>
                <h3 className='text-2xl font-semibold mb-4'>Real-Time Bidding</h3>
                <p className='text-gray-700'>Experience the thrill of live auctions with our real-time bidding system.</p>
            </div>
            <div className='md:w-1/3 bg-gray-200 hover:bg-gray-300 shadow-lg rounded-lg p-6 mb-6 md:mb-0'>
                <h3 className='text-2xl font-semibold mb-4'>Secure Transactions</h3>
                <p className='text-gray-700'>Your security is our priority. Enjoy safe and secure payment options.</p>
            </div>
            <div className='md:w-1/3  bg-gray-200 hover:bg-gray-300 shadow-lg rounded-lg p-6'>
                <h3 className='text-2xl font-semibold mb-4'>Wide Range of Items</h3>
                <p className='text-gray-700'>From electronics to collectibles, find a diverse selection of items to bid on.</p>
            </div>
        </div>
    </div>
  )
}

export default Features