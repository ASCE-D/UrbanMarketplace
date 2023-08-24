import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.user);
 console.log(user);
  useEffect(() => {
    if (isAuthenticated===false) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return <div>{user.name}</div>;
};

export default Profile;
