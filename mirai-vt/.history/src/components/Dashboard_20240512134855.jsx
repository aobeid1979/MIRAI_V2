import React from 'react';
import { useAuth } from '../Context/AuthContext';

const Dashboard = () => {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  const logIn = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setAuthUser(null);
  };

  const logOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setAuthUser({
      Name: 'Ammar',
    });
  };

  return (
    <>
      <span>
        User is Currently: {isLoggedIn ? 'Logged-In' : 'Loggeed Out'} .{' '}
      </span>
      {isLoggedIn ? <span>User name: {authUser.Name}</span> : null}
      <br />
      {isLoggedIn ? (
        <button
          onClick={(e) => {
            logOut(e);
          }}
        >
          {' '}
          Log Out
        </button>
      ) : (
        <button
          onClick={(e) => {
            logIn(e);
          }}
        >
          {' '}
          Log In
        </button>
      )}
    </>
  );
};

export default Dashboard;
