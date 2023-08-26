import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../layouts/Loader/Loader";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg p-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">User Profile</h1>
            <div className="mb-4">
              <img
                src="profile-image.jpg"
                alt="User Profile"
                className="w-32 h-32 mx-auto rounded-full shadow-md"
              />
            </div>
            <div className="mb-6 text-gray-600">
              <p className="text-lg font-semibold">{user.name}</p>
              <p className="text-md">{user.email}</p>
              <p className="text-md">
                <span >Role:</span> {user.role}
              </p>
            </div>
            <div className="text-gray-600">
              <p className="text-md">
                Joined on:{" "}
                {new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric"
                })}
              </p>
              <p className="text-md">
                Joined at:{" "}
                {new Date(user.createdAt).toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: true,
                  timeZone: "UTC"
                })}{" "}
                UTC
              </p>
            </div>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
