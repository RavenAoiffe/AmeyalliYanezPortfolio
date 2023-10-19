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
        windowHeight > 100 ? setStickyClass(true) : setStickyClass(false);
      }
    };

return(
<nav id="menu" className={stickyClass ? 'fijo' : '' }>
  <div className="container">
  <p className="fechas">
    <strong>Ameyalli </strong>
    Yáñez
  </p>
  <div className="menu-rs">
    <div className="flex">
      <a
        style={{ display: "none" }}
        href="https://www.tiktok.com/@ravenyanez"
        rel="noopener"
        target="_blank"
        className="mas"
      >
        <div className="tik-tok" />
      </a>
      <a
        href="https://github.com/RavenAoiffe"
        rel="noopener"
        target="_blank"
        className="mas"
      >
        <div className="github" />
      </a>
      <a href="#" style={{ display: "none" }} className="mas noche">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmUlEQVR4nO2Zz08bRxTHrSpSDk3+hTaRqrRSo/S/qHIIp1659YcqVVWI2TUGDGsbJH7aYGx+Gb9Zi0PBOUBABmPtm1rqpScS1CY55lCp6iEkElRVm5Bmq7fyWuvFxuPx2s3BT3rSsrvMfD8z78cs+Hxd61rXukaWTqevA8A3ALAJAD8zxp4xxv5ijL0GgJeMsSMAuA8A9wDgM9+7YIlE4rKu618zxp4yxswm/QljzJ9Kpa50XLimae/puv49APwhIbzKAeAYAPo0TbvUEfG6rl8DgFKrwmv4w0wm83FbxUcikS8A4KQN4s2ynzLGetoiXlGU3nA4/Myx9eb8/LwZjUbNoaEhU1VVMxAImKFQyJyamrKeS0KcAUCvp+L7+/t7FEV5Mzc395YmWV5eNkdGRizR9XxiYqKVnTgDgDueiPf7/TcURTklUaurq2YymbRW+iLx5MFg0Jmo5uTkpHWPfHx83Eyn040g/tR1/ZOWxFNlUBTl0Ba1sLAgJJ58cHCwImZ6evrccwo1aBBmAHDYUnVSFKVPRGwtJ9G2EBJb653Z2dlzoin0aJcceXRXSryqqlcVRTmWET86Olq1uvV2LRQKnQMYGBioPI/H41afyGQyV2VWX5Fd/ZWVlar4v+jdeDxeBTA8PFx5Rtfl+34ZgKeyAGtraxVBBNPo/Wg0WknqWCxWuU+7YR87mhV/yzlBOBy2XBTAFkRO1yK/EwwGzaWlJWvHKH+oCFDlshcik8ncbAbALwJADSwSiVgiaULZHVMdEM7dc7l4MquqmhNd6bGxMcsJpFUAVVWtHlGrvNIxXRggEAg88QqAKhAJODg4MLPZrBBEJBKxur0L4JEwgKZpb2oNTMcHEm3XdQob+pkmrBdCuq6bnHPLEVG6lzDGngsDxGKxf2sNaK+2aGLSYc8Wb3szuRJ0HEcYY/8IA2Sz2bNaA9LKE0C9zuo8clDIuMWTU6cVBQhVNzpxgEKh8ILoZROxnnjyzc3Nmp05mUxayZtIJKzqRvPTtVQIcc5/WVxcbAsAOQl1HhlUVRU5nR41A3CfRNCZRgZgY2PjQgDyfD5f1XU1TbOO6/UAdF1/IAxgGIafJtne3q46m4j6zMxMQwC7Ko04PowodOqIN3d2dqaFARDxlnOlqJo0A0JCRAB4OSdopymkqIm5xVPvyOfzbw3D+EAYoAzxq3uyra0tIQAqlaIA3OGFQsHM5XLm+vq6JZyui8UiPTtsSrwzjGTqOJ2bZAB4/VD7rmmAYrH4PiI+dw9GX1GNAFKplJcAv+3v71/2yRgi9rkH3N3dvTAfqJo0KqNNrv63PlkrlUqXOOcP3YPu7e1Z3ZaSj5oSAVEC0seLl+I55z+RBmmAMsRHnPMTL2NacOVfcs4/9HlhiNiDiGcdBHhlGMZtT8Q7IHo7AYGIfxuG4c1f5dxGAyPiaRsBTjjnn7dFvAPiBjWWNoj/0bOYb2RUGRDxLuf82APhv1Ojon+adES8C+QKdWxEfCwR648R8UvpJuW1cc4/pV1BxBwiPuKcv6BqgoivqaMj4hEi/oCIX5VKpWv/t96uda1rvnfD/gM0dKahps3mYgAAAABJRU5ErkJggg==" />
      </a>
    </div>
    <div id="menu_movil" className="menu_movil" onClick={abrirMenuClick}>
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
