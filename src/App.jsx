import './App.css';

import Marquee from './components/decorative/Marquee/Marquee';
import ContactMeContainer from './components/information/ContactMeContainer/ContactMeContainer';
import IntroductionContainer from './components/information/IntroductionContainer/IntroductionContainer';
import EducationWorkContainer from './components/information/EducationWorkContainer/EducationWorkContainer';
import ProjectContainer from './components/information/ProjectContainer/ProjectContainer';
import StackContainer from './components/information/StackContainer/StackContainer';
import DvdScreen from './components/decorative/DvdScreen/DvdScreen';
import CupInteraction from './components/decorative/CupInteraction/CupInteraction';
import SystemNav from './components/navigation/SystemNav/SystemNav';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <div className='App' id="main-content">
      <SystemNav />
      <div className="introduction-container" id="introduction">
        <IntroductionContainer />
      </div>
      <div className="stack-projects-container" id="stack-projects" >
        <div className="stack-container" style={{width: '35%' }} id="stack">
          <StackContainer />
        </div>
        <div className="projects-container" style={{width: '65%'}} id="projects">
          <ProjectContainer />
        </div>
      </div>
      <div className="education-work-container" id="records">
        <div style={{width: '65%'}} >
          <EducationWorkContainer />
        </div>
        {isMobile ? null : (
          <div className="decoration" style={{width: '35%'}}>
            <DvdScreen />
          </div>
        )}
      </div>
      <div className="contact-me-container" id="contact-me" >
        {isMobile ? null : (
          <div className="decoration" style={{width: '35%'}}>
            <CupInteraction />
          </div>
        )}
        <div style={{width: '65%'}}>
          <ContactMeContainer />
        </div>
      </div>
      {isMobile ? null : (
        <div className='decoration'>
          <Marquee />
        </div>
      )}
    </div>
  );
}

export default App;