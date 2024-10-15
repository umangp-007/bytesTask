import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const goHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button
        onClick={goHome}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
