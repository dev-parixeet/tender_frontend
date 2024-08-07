import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="p-4 border rounded shadow">
      <img src={`http://localhost:5000/uploads/${user.profilePicture}`} alt="Profile" className="w-16 h-16 rounded-full" />
      <h3 className="text-xl">{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.username}</p>
      <p>{user.contact}</p>
      <div className="flex space-x-2 mt-2">
        <Link to={`/update/${user._id}`} className="px-4 py-2 bg-yellow-500 text-white">Update</Link>
        <button onClick={() => onDelete(user._id)} className="px-4 py-2 bg-red-500 text-white">Delete</button>
      </div>
    </div>
  );
};

export default UserCard;
