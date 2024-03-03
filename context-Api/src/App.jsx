import { useState } from 'react'
import UserContextProvider from './assets/Context/UserContextProvider'
import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {

  return (
    <UserContextProvider>
      <h1>React With Context api</h1>
      <Login></Login>
      <Profile/>
    </UserContextProvider>
  );
}

export default App
