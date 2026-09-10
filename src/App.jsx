import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import Journey from './components/Journey';
import SelectedWork from './components/SelectedWork';
import WhatChanges from './components/WhatChanges'; 
import InstagramObjection from './components/InstagramObjection';
import Process from './components/Process';
import Comparison from './components/Comparison';
import ValueProposition from './components/ValueProposition';
import FinalCTA from './components/FinalCTA';
import ApplicationForm from './components/ApplicationForm';

function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleOpenApplication = () => setIsApplicationOpen(true);
  const handleCloseApplication = () => setIsApplicationOpen(false);

  return (
    <div className="app-wrapper">
      <Navbar onOpenApplication={handleOpenApplication} />
      <Hero onOpenApplication={handleOpenApplication} />
      <TheProblem />
      <Journey />
      <SelectedWork />
      <WhatChanges />
      <InstagramObjection />
      <Process />
      <Comparison />
      <ValueProposition />
      <FinalCTA onOpenApplication={handleOpenApplication} />
      
      {isApplicationOpen && (
        <ApplicationForm onClose={handleCloseApplication} />
      )}
    </div>
  );
}

export default App;
