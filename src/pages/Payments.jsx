import React from 'react'


const Payments = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Payment Form
      </h2>

      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Buyer ID</label>
          <input
            type="text"
            id="buyerId"
            name="buyerId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Enter Buyer ID"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Item ID</label>
          <input
            type="text"
            id="itemId"
            name="itemId"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Enter Item ID"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Winning Bid</label>
          <input
            type="number"
            id="winningBid"
            name="winningBid"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            placeholder="Enter Winning Bid"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
            bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
            required
          >
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 
          font-semibold text-lg transition duration-300"
        >
          Submit Payment
        </button>
      </form>
    </div>
  )
}

export default Payments
