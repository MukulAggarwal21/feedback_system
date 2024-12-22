import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activePage, setActivePage, setSidebarOpen }) => {
  const handleClick = (page) => {
    setActivePage(page);
    console.log(`${page} clicked`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <i className="home-icon">🏠</i>
        <h2>GCCPUC</h2>
      </div>
      <div className="user-info">
        <img src="face-image-url" alt="Profile" className="profile-pic" />
        <h2>Welcome</h2>
      </div>
      <div className="menu">
        <h4>General</h4>
        <button
          onClick={() => handleClick('login')}
          className={activePage === 'login' ? 'active' : ''}
        >
          Login
        </button>
        <button
          onClick={() => handleClick('feedback')}
          className={activePage === 'feedback' ? 'active' : ''}
        >
          Feedback Form
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
