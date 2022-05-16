import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <Fragment>
      <div className="login-container">
        <h2>LOGIN</h2>
        <div className="login-row">
          <label>Username:</label>
          <input />
        </div>
        <div className="login-row">
          <label>Password:</label>
          <input type="password" />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </Fragment>
  );
};

export default Login;
