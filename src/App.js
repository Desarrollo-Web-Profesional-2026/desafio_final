import React from 'react';
import UserProfile from './componentes/UserProfile';
import TechList from './componentes/ListTech'; 

import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <hr />
      <TechList />
    </div>
  );
}

export default App;