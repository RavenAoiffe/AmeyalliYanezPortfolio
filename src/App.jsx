import { useState } from 'react';

import Header from './components/Header';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Swipper from './components/Swipper';
import Project from './components/Project';

function App() {
  return (
    <>
    
    <Header/>
    <div className="container">
      <Principal>
        <h1>Ameyalli Yáñez</h1>
        <p>UI/UX Developer / Frontend Developer / UX writing</p>
      </Principal>

      <Descripcion/>
      <Swipper></Swipper>

      <Experiencia id="Experiencia"></Experiencia>
    </div>
     <Footer/>
    </>
  )
}

export default App
