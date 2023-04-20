import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import ResumePage from './pages/ResumePage/ResumePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

function App() {
  return (
    <div className="App" 
    style={{ 
      backgroundImage: 'url("/topimage2.webp")' 
      , backgroundRepeat: 'no-repeat'
      , backgroundSize: 'cover'
      }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/resume" element={<ResumePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
