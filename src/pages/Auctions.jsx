import React, { useState } from 'react';

const Auctions = () => {
  const [valid, setValid] = useState(true);

  const myValidator = (e) => {
    e.preventDefault();

    const userId = e.target.userId.value;
    const itemId = e.target.itemId.value;
    const bidAmount = e.target.bidAmount.value;
    
    if (!userId || !itemId || !bidAmount) {
      setValid(false);
      return;
    }

    setValid(true);
    alert(`Bid Submitted!\nUser ID: ${userId}\nItem ID: ${itemId}\nBid: ${bidAmount}`);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 py-10'>
      <div className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg'>
        <h1 className='text-3xl font-bold mb-10 text-center text-gray-800'>
          Bid Submission
        </h1>

        {!valid && (
          <p className='text-red-500 text-center mb-4'>
            Please fill in all fields
          </p>
        )}

        <form onSubmit={myValidator} className='space-y-6'>
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder="Enter your User ID"
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Item ID</label>
            <input
              type="text"
              id="itemId"
              name="itemId"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder="Enter the Item ID"
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Bid Amount</label>
            <input
              type="number"
              id="bidAmount"
              name="bidAmount"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder="Enter your bid amount"
            />
          </div>

          <button
            type="submit"
            className='w-full bg-blue-500 text-white py-3 rounded-lg 
            hover:bg-blue-600 font-semibold text-lg transition duration-300'
          >
            Submit Bid
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auctions;
