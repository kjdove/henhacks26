import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {SheriffDashboard} from './sheriffDashboard.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import { PublicDashboard } from './publicDashboard.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SheriffDashboard" element={<SheriffDashboard/>}/>
        <Route path="/PublicDashboard" element={<PublicDashboard/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
