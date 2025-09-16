import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import ProjectGoals from './components/ProjectGoals'
import DataCalculation from './components/DataCalculation'
import About from './components/About'
import Phases from './components/Phases'
import Architecture from './components/Architecture'
import Performance from './components/Performance'
import ElearningMarket from './components/ElearningMarket'
import RussiaMarket from './components/RussiaMarket'
import BusinessHypothesis from './components/BusinessHypothesis'
import ProjectConclusion from './components/ProjectConclusion'
import HackathonResults from './components/HackathonResults'
import Team from './components/Team'
import Demo from './components/Demo'
import Footer from './components/Footer'
import TargetCursor from './components/TargetCursor'
import { useScrollAnimations } from './hooks/useScrollAnimations'

const App: React.FC = () => {
  // Initialize scroll animations
  useScrollAnimations()

  return (
    <Router>
      <div className="App">
        <TargetCursor 
          targetSelector=".cursor-target"
          spinDuration={2}
          hideDefaultCursor={true}
        />
        <Navbar />
        <main>
          <Hero />
          <Introduction />
          <ProjectGoals />
          <DataCalculation />
          <About />
          <Phases />
          <Architecture />
          <Performance />
          <ElearningMarket />
          <RussiaMarket />
          <BusinessHypothesis />
          <ProjectConclusion />
          <HackathonResults />
          <Team />
          <Demo />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
