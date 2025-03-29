import { useState, useEffect } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {

  const [abrirmenu, setAbrirMenu] = useState(false);
  //toggle entre flex y hidden

  const abrirMenuClick= () =>{
      if(abrirmenu){
        setAbrirMenu(false)
      }
      else{
        setAbrirMenu(true)
      }
  }

  //navbar
  const [stickyClass, setStickyClass] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);

      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);

    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
      }
    };

    const [darkMode, setDarkMode] = useState(false);

    const activeDarkMode = () =>{
      if(darkMode){
        setDarkMode(false)
        document.body.classList.remove('bg-neutral-900');
      }
      else{
        setDarkMode(true)
         document.body.classList.add('bg-neutral-900');
         document.body.classList.add('transition');
         document.body.classList.add('ease-in-out'); 
         document.body.classList.add('delay-150');
      }
    }
return(
<nav id="menu" className={stickyClass ? 'fijo' : '' }>
  <div className="container">
      <div className="menu-rs">
    <div className="flex">
      <a
        href="https://www.linkedin.com/in/ameyalli-y%C3%A1%C3%B1ez-282013130/"
        rel="noopener"
        target="_blank"
        className="mas"
      >
        <span className="linkedin icono-menu" />
      </a>
      <a
        href="https://github.com/RavenAoiffe"
        rel="noopener"
        target="_blank"
        className="mas"
      >
        <span className="github icono-menu" />
      </a>
      <a onClick={activeDarkMode} className={darkMode ? 'sun icono-menu' : 'noche icono-menu'}>
      </a>
    </div>
    <div id="menu_movil" className={abrirmenu ? 'menu_movil close' : 'menu_movil' } onClick={abrirMenuClick}>
      <span />
      <span />
      <span />
    </div>
  </div>
  <ul id="navegacion"
  className={abrirmenu ? 'navegacion-principal flex' : 'navegacion-principal hidden' }>
    <li>
    <AnchorLink href='#presentacion' onClick={abrirMenuClick}>Presentación</AnchorLink>
    </li>
    <li>
    <AnchorLink href='#portafolio' onClick={abrirMenuClick}>Portafolio</AnchorLink>
    </li>
    <li>
    <AnchorLink href='#experiencia' onClick={abrirMenuClick}>Experiencia</AnchorLink>
    </li>
    <li>
      <a className="enlace hidden" href="#Educacion">
        Educación
      </a>
    </li>
    <li>
      <a className="enlace hidden" href="#Habilidades">
        Habilidades
      </a>
    </li>
    <li>
      <a className="enlace hidden" href="#Cursos">
        Cursos
      </a>
    </li>
    <li>
      <a href="#publicaciones" className="enlace hidden">
        Publicaciones
      </a>
    </li>
    <li>
      <a className="enlace hidden" href="#EnQue">
        ¿En qué estoy ahora?
      </a>
    </li>
    <li>
      <a className="enlace hidden" href="#Contacto">
        Contacto
      </a>
    </li>
 
  </ul>
  </div>
</nav>

)
}

export default Header;
