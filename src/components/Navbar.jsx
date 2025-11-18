import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500  to-green-700  w-full text-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold">
              AuctionX
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-200 hover:font-bold">Home</Link>
            <Link to="/auctions" className="hover:text-gray-200 hover:font-bold">Auctions</Link>
            <Link to="/add-item" className="hover:text-gray-200 hover:font-bold">Add Item</Link>
            <Link to="/payments" className="hover:text-gray-200 hover:font-bold">Payments</Link>
            <Link to="/feedback" className="hover:text-gray-200 hover:font-bold">Feedback</Link>
            <Link to="/login" className="hover:text-gray-200 hover:font-bold">Login</Link>
            
          </div> 

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-2 pt-2 pb-3 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/auctions" className="block px-3 py-2 rounded">
            Auctions
          </Link>
          <Link to="/add-item" className="block px-3 py-2 rounded">
            Add Item
          </Link>
          <Link to="/payments" className="block px-3 py-2 rounded">
            Payments
          </Link>
          <Link to="/feedback" className="block px-3 py-2 rounded">
            Feedback
          </Link>
          <Link to="/login" className="block px-3 py-2 rounded">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
