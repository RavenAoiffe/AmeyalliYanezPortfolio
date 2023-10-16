import { useState } from 'react';

import Header from './components/Header';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';
import Swipper from './components/Swipper';

function App() {
  return (
    <div className="container">
    <Header/>

    <Principal>
    <h1>UI/UX Developer / Frontend Developer / UX writing</h1>
    </Principal>

    <Descripcion/>
    <h2 className='mt-10 mb-10 font-size-4rem'>Proyectos</h2>
    <Swipper></Swipper>
    </div>
  )
}

export default App
