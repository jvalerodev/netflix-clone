import React from 'react';
import './ProfileScreen.css';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../config/firebase';

import Navbar from '../components/HomeScreen/Navbar';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="profileScreen">
      <Navbar />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>

              <button className="profileScreen__signOut" onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;