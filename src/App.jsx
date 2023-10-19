import { useState } from 'react';

import Header from './components/Header';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Swipper from './components/Swipper';

function App() {
  return (
    <>
    <div className="container">
    <Header/>

    <Principal>
    <h1>UI/UX Developer / Frontend Developer / UX writing</h1>
    </Principal>

    <Descripcion/>
    <h2 className='mt-8 mb-10 font-size-4rem font-900 color-darkgray'>Proyectos</h2>
    <Swipper id="Porta"/>
    
    <h2 className='mt-8 mb-10 font-size-4rem font-900 color-darkgray'>Experiencia</h2>
    <Experiencia id="Experiencia"></Experiencia>
    </div>
     <Footer/>
    </>
  )
}

export default App
