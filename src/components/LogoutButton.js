import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import './LogoutButton.css';

const LogoutButton = ({ loggedInUser, logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="logout-button-container">
      {loggedInUser && (
        <>
          <h1>Welcome, {loggedInUser.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.loggedInUser,
  };
};

export default connect(mapStateToProps, { logout })(LogoutButton);
