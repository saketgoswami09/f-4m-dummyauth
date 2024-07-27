// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/profile');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Welcome back! 👋</h2>
        <p className='p1-card'>Sign in to your account</p>

        <p className='new-p'>Your email</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className='new-p'>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>CONTINUE</button>
        {error && <p className="error">{error}</p>}
        <p className='new-p1'>Forget your password?</p>
        <div className="signup">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
