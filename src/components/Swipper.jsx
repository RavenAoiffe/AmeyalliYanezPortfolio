import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import { generarId } from '../../helpers';
const Swipper = () => {
 
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };  
    
    const projectList = [
      {
        "project":"Escrituras Digitales",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx/edigitales/2019",
        "image":"/img/portafolio/escrituras1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño 2019"
      },
      {
        "project":"Fabrica de Producción Editorial",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx/Fabrica_Editorial/Anteriores/2024",
        "image":"/img/portafolio/fabrica1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño 2018 - 2020"
      },
      {
        "project":"DiseñaLab",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx/DisenaLab",
        "image":"/img/portafolio/disena1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SASS | JAVASCRIPT | GULP"
      },
      {
        "project":"Centro Multimedia del Centro Nacional de las Artes",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx",
        "image":"/img/portafolio/cmm328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | PHP | Diseño"
      },
      {
        "project":"Eurojazz 2020",
        "anios":"2020",
        "link":"https://cmm.cenart.gob.mx/Eurojazz",
        "image":"/img/portafolio/eurojazz.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | SCROLLMAGIC"
      },
      {
        "project":"PAPIAM",
        "anios":"2020",
        "link":"https://papiam.cenart.gob.mx/",
        "image":"/img/portafolio/papiam.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SASS | JAVASCRIPT | GULP | NodeJs"
      },
      {
        "project":"Muestra Papiam",
        "anios":"2020",
        "link":"https://muestrapapiam.cenart.gob.mx/",
        "image":"/img/portafolio/muestra.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SASS | JAVASCRIPT | GULP | NodeJs"
      },
      {
        "project":"Laboratorio LEIVA",
        "anios":"2020",
        "link":"https://leiva.cenart.gob.mx/",
        "image":"/img/portafolio/muestra.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SASS | JAVASCRIPT | GULP | NodeJs"
      },
      {
        "project":"Administrador de Pacientes de Veterinaria",
        "anios":"2020",
        "link":"https://jazzy-peony-e5c7f8.netlify.app/",
        "image":"/img/portafolio/veterinaria.png",
        "description":"lorem impusummsds",
        "tecno":"React JS | TailwindCSS | LocalStorage"
      },
      {
        "project":"Ideomatics",
        "anios":"2024",
        "link":"https://idiomatics.com/",
        "image":"/img/portafolio/veterinaria.png",
        "description":"lorem impusummsds",
        "tecno":"React JS | SASS | ScrollMagic | GIT "
      }
    ]
  return (
    <div id="portafolio">
      <h2 className='mt-8 mb-10 font-size-4rem font-900 color-darkgray'>Proyectos</h2>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {projectList.map(project =>(
            <Carousel.Item key={generarId()}>
              <ExampleCarouselImage 
                  project={project} text="First slide" />
                    <Carousel.Caption>
                      <p>{project.tecno}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              ))}
          </Carousel>
    </div>
  );
}

export default Swipper;
