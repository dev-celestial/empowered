import React from 'react';
import '../App.css'
import image from '../assets/login.jpg';
const LoginPage = ({ onChangePage }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={image} />
      </div>
      <div className="auth-right">
        <h1>Welcome to Lorem</h1>
        <p>Existing User?</p>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          New User? <span onClick={() => onChangePage('register')}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
