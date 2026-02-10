import React from 'react';
import UserProfile from './componentes/UserProfile';
import TechList from './componentes/ListTech'; 
import CounterButton from './componentes/CounterButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <hr />
      <TechList />
      <hr />
      <CounterButton />
    </div>
  );
}

export default App;