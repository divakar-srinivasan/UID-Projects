import React from 'react';
import UserProfile from './userprofile';
import './App.css'; 

function App() {
  const user = {
    username: 'DIVAKAR S',
    email: 'divakars.22it@kongu.edu',
    details: {
      name: 'divakar s',
      rollNumber: '22itr024',
      department: 'Information Technology'
    }
  };

  return (
    <div className="App">
      <UserProfile
        username={user.username}
        email={user.email}
        details={user.details}
      />
    </div>
  );
}

export default App;
