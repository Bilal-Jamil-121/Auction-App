import React from 'react'

const Feedback = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Feedback & Ratings
      </h1>

      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Buyer ID
          </label>
          <input
            type="text"
            name="buyerId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Enter Buyer ID"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Seller ID
          </label>
          <input
            type="text"
            name="sellerId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Enter Seller ID"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Rating (1–5)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Rate from 1 to 5"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Comments
          </label>
          <textarea
            name="comments"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 resize-none"
            placeholder="Write your feedback..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 
          font-semibold text-lg transition duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  )
}

export default Feedback
