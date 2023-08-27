import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader/Loader";
import Sidebar from "../Admin/Sidebar";
import Dashboard from "../Admin/Dashboard";

const Profile = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  console.log(user);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="flex">
      <Sidebar />

      {/* Vertical line */}
      <div className="w-px bg-gray-300 dark:bg-gray-600"></div>

      {/* Main Content */}
      <main className="flex-1 bg-white p-4">
        {/* Profile information */}
        <div className="flex items-center mb-4">
          <img
            className="w-64 h-64 rounded-full mr-4"
            src="/path-to-profile-image.jpg"
            alt="Profile"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.role}</p>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>
        
        {user.role === "admin"? <Dashboard /> : none}
      </main>
    </div>
  );
};
export default Profile;
