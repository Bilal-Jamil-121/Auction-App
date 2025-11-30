import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {
  const [valid, setValid] = useState(true);
  const myValidator = (e) => {
  e.preventDefault(); 

  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const role = e.target.role.value;

  // Basic validation
  if (!username || !email || !password) {
    setValid(false);
    return;
  }



  alert(`Welcome ${username}! You logged in as ${role}`);
  setValid(true);
};

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 '>
      
      <div className='bg-white mt-2 p-10 rounded-2xl shadow-xl w-full max-w-md'>
       
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>Login to Your Account</h2>
         {!valid && <p className="text-red-500 text-center mb-4">Please fill in all fields</p>}
        <form className='space-y-6' onSubmit={myValidator}>
          <div>
            <label  className='block text-gray-700 mb-2 font-medium'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Email</label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder='Enter your email'
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Password</label>
            <input
              type='password'
              id='password'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
              placeholder='Enter your password'
            />
          </div>

          <div>
            <label className='block text-gray-700 mb-2 font-medium'>Role</label>
            <select
              id='role'
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200'
            >
              <option value='buyer'>Buyer</option>
              <option value='seller'>Seller</option>
            </select>
          </div>

          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold text-lg transition duration-300'
          >
            Login
          </button>
        </form>

        <p className='text-center text-gray-500 mt-6'>
          Don't have an account? <Link to={"/Register"}><span className='text-blue-500 font-medium hover:underline cursor-pointer'>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
