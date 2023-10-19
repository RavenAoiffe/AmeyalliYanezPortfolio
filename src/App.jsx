import { useState } from 'react';

import Header from './components/Header';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';
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
    <Swipper/>
    
    <h2 className='mt-8 mb-10 font-size-4rem font-900 color-darkgray'>Experiencia</h2>
    </div>
     <Footer/>
    </>
  )
}

export default App
