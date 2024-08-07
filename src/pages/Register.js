import React, { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";

// import UserForm from '../components/UserForm';

const Register = () => {
  const navigate =useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    contact: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setFormData({
        name: "",
        email: "",
        username: "",
        contact: "",
        profilePicture: null,
      });
      navigate('/view-users')
    } catch (error) {
      console.error("Error during registration:", error);
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
            className="mt-1 block w-full border"
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
            className="mt-1 block w-full border"
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
            className="mt-1 block w-full border"
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
            className="mt-1 block w-full border"
            required
          />
        </div>
        <div>
          <label className="block">Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            onChange={handleChange}
            className="mt-1 block w-full border"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white border"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
