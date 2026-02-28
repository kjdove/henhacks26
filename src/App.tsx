// import { useState } from 'react'
import './App.css'
import {useNavigate} from 'react-router-dom';

export interface Bandit {
  name: string;
  description: string;
  threatLevel: number;
  status: 'active' | 'archived';
  location: string;
  photo: string;
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login Page</h1>
      <p onClick={()=> navigate (`/SheriffDashboard`)}>Sheriff Dashboard</p>
      <p onClick={()=> navigate (`/PublicDashboard`)}>Public Dashboard</p>
    </>
  )
}

export default App
