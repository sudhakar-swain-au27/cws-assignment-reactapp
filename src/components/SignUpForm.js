import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/authActions';
import './SignUpForm.css';
const SignUpForm = ({ signUp }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (username.trim() === '') {
        setIsUsernameValid(false);
        return;
      }
  
      if (password.trim() === '') {
        setIsPasswordValid(false);
        return;
      }
  
      signUp({ username, password });
    };
  
    return (
      <div className='signup-page'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`signup-input ${isUsernameValid ? '' : 'invalid'}`}
          required
        />
        {!isUsernameValid && <p className="error-message">Please enter a valid username</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`signup-input ${isPasswordValid ? '' : 'invalid'}`}
          required
        />
        {!isPasswordValid && <p className="error-message">Please enter a valid password</p>}
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      </div>
    );
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      signUp: (userData) => dispatch(signUp(userData)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(SignUpForm);
    