import React, { Fragment } from 'react';
import './Login.css';

const Login = () => {
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
        <button>Login</button>
      </div>
    </Fragment>
  );
};

export default Login;
