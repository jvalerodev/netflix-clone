import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;