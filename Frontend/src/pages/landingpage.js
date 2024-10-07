import React from 'react'
import { Link } from 'react-router-dom';

const landingpage = () => {
  return (
    <div className="bg-yellow-500 min-h-screen">
      {/* Your content goes here */}
      <div className="flex flex-col items-center p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome to Shop Manager</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Products</h2>
            <p className="text-2xl font-bold">7</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Bills</h2>
            <p className="text-2xl font-bold">10</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Categories</h2>
            <p className="text-2xl font-bold">4</p>
          </div>
          <div className="m-6 flex justify-center space-x-10">
            <Link to="/stocks">
              <button className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-3 px-6 rounded text-xl">
                Manage Stocks
              </button>
            </Link>

            <Link to="/bills">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-xl">
                See and Create Bills
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default landingpage