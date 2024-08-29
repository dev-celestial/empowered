import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import image from '../assets/signup.jpg';

const RegisterPage = ({ onChangePage }) => {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={image} />
      </div>
      <div className="auth-right">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Class" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>

        <small> Already have an account? <Link to="/login">Sign In</Link></small>
      </div>
    </div>
  );
};

export default RegisterPage;