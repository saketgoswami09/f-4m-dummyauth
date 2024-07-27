// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      setError('No user logged in');
      navigate('/login'); // Redirect to login if no user
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${storedUser.id}`);
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem('userProfile', JSON.stringify(data)); // Save user profile to local storage
          setUser(data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Profile</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Profile;
