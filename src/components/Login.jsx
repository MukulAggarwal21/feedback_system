import React from 'react';
import '../styles/Login.css'

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
