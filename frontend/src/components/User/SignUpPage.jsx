import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log("Signing up with:", name, email, password);
  };
  const handleAvatarChange = (e) => {
    // setAvatar(e.target.files[0]);
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-[320px]">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-sm font-medium mb-1">
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="w-full py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
              onChange={handleAvatarChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
