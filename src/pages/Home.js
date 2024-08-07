import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8">User Management System</h1>
      <div className="space-x-4">
        <Link to="/register" className="px-4 py-2 bg-blue-600 text-white">Register</Link>
        <Link to="/view-users" className="px-4 py-2 bg-green-600 text-white">View Users</Link>
      </div>
    </div>
  );
};

export default Home;
