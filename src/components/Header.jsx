
import React from 'react';
import '../styles/Header.css';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="header">
      <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>
      <h1>Feedback Form</h1>
    </div>
  );
};

export default Header;

