import { StrictMode, /*type SetStateAction*/ } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, /*type Bandit*/} from './App.tsx'
import {SheriffDashboard} from './sheriffDashboard.tsx'
import {HashRouter, Route, Routes} from "react-router-dom";
import { PublicDashboard } from './publicDashboard.tsx'
import { Wanted } from './wanted.tsx'
import { Caught } from './caught.tsx'
import { Map } from './map.tsx'

import Bandits from './Bandits.ts'
export function initializeBandits() {
  const saved = localStorage.getItem("bandits");
  if (!saved) {
    localStorage.setItem("bandits", JSON.stringify(Bandits));
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/SheriffDashboard" element={<SheriffDashboard/>}/>
        <Route path="/PublicDashboard" element={<PublicDashboard />}/>
        <Route path="/SheriffDashboard/Wanted" element={<Wanted/>}/>
        <Route path="/SheriffDashboard/Caught" element={<Caught/>}/>
        <Route path="/SheriffDashboard/Map" element={<Map/>}/>
        <Route path="/PublicDashboard/Wanted" element={<Wanted/>}/>
        <Route path="/PublicDashboard/Caught" element={<Caught/>}/>
        <Route path="/PublicDashboard/Map" element={<Map/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>
)
