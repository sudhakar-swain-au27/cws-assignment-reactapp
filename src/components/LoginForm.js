import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions/authActions';
import LogoutButton from './LogoutButton';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginPage = ({ login, loggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login with JWT authentication
    if (username.trim() === 'user' && password === 'password') {
      // Simulating the user object returned from the server
      const user = {
        id: 1,
        username: 'user',
      };

      login(user);
    }
  };

  const handleSignUp = () => {
    history.push('/signup');
  };

  if (loggedInUser) {
    return <LogoutButton />;
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps, { login })(LoginPage);
