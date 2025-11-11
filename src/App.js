import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
    
      <main>
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}



export default App;
