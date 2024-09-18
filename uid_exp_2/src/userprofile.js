import React from 'react';

const UserProfile = ({ username, email, details }) => {
  return (
    <div className="user-profile">
      <h2>{username}'s Profile</h2>
      <p>Email: {email}</p>
      <div className="details">
        <h3>Details:</h3>
        <p>Name: {details.name}</p>
        <p>Roll Number: {details.rollNumber}</p>
        <p>Department: {details.department}</p>
      </div>
    </div>
  );
};

export default UserProfile;
