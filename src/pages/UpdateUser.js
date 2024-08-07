import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, updateUser } from '../api';

const UpdateUser = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    contact: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const users = await getUsers();
        const user = users.find((u) => u._id === id);
        setFormData({
          name: user.name,
          email: user.email,
          username: user.username,
          contact: user.contact,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, formData);
      navigate('/view-users');
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label className="block">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full"
            required
          />
        </div>
        <div>
          <label className="block">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 block w-full"
            required
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
