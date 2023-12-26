import './css/index.css'
import { Routes, Route } from 'react-router-dom'

import { HomePage } from './pages/Home/HomePage'
import { DriftPage } from './pages/Drift/DriftPage'
import { ForzaPage } from './pages/Forza/ForzaPage'
import { TimeAttackPage } from './pages/TimeAttack/TimeAttackPage'

import { Menu } from './components/Menu/Menu'


function App() {
  return (
      <div>
        <Menu />
        <div className="page">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/drift" Component={DriftPage} />
          <Route path="/timeattack" Component={TimeAttackPage} />
          <Route path="/forza" Component={ForzaPage} />
        </Routes>
      </div>
    </div>
  )
}

export default App
