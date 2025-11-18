import React from 'react';

const AddItem = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 py-10'>
      <div className='bg-white p-10 rounded-2xl shadow-xl w-full max-w-2xl'>
        <h2 className='text-3xl font-bold mb-10 text-center text-gray-800'>
          Add Auction Item
        </h2>

        <form className='space-y-6'>
          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Item Name</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder="Enter item name"
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className='w-full px-4 py-3 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 resize-none'
              placeholder="Enter item description"
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-gray-700 mb-2 font-medium'>Starting Bid</label>
              <input
                type="number"
                id="startingBid"
                name="startingBid"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
                placeholder="0.00"
              />
            </div>

            <div>
              <label className='block text-gray-700 mb-2 font-medium'>Auction End Date</label>
              <input
                type="date"
                id="auctionEndDate"
                name="auctionEndDate"
                className='w-full px-4 py-3 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              />
            </div>
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Images</label>
            <input
              type="file"
              id="images"
              name="images"
              multiple
              className='w-full px-4 py-3 border border-gray-300 rounded-lg bg-white
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
            />
            <p className='text-sm text-gray-500 mt-1'>
              You can upload multiple images
            </p>
          </div>

          <button
            type="submit"
            className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 
            font-semibold text-lg transition duration-300'
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
