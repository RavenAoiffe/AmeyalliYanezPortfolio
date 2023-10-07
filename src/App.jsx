import { useState } from 'react';

import Header from './components/Header';
import Principal from './components/Principal';
import Descripcion from './components/Descripcion';

function App() {
  return (
    <div className="container">
    <Header/>

    <Principal>
    <h1>UI/UX Developer / Frontend Developer / UX writing</h1>
    </Principal>

    <Descripcion/>
    </div>
  )
}

export default App
