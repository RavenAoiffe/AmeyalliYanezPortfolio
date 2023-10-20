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
        "link":"https://cmm.cenart.gob.mx/edigitales",
        "image":"/img/portafolio/escrituras1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño"
      },
      {
        "project":"Fabrica de Producción Editorial",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx/Fabrica_Editorial",
        "image":"/img/portafolio/fabrica1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño 2018"
      },
      {
        "project":"DiseñaLab",
        "anios":"2019",
        "link":"https://cmm.cenart.gob.mx/DisenaLab",
        "image":"/img/portafolio/disena1328.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SCSS | JAVASCRIPT | GULP"
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
        "link":"https://cmm.cenart.gob.mx/Eurojazz",
        "image":"/img/portafolio/papiam.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
      },
      {
        "project":"Muestra Papiam",
        "anios":"2020",
        "link":"https://cmm.cenart.gob.mx/Eurojazz",
        "image":"/img/portafolio/muestra.png",
        "description":"lorem impusummsds",
        "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
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
        "project":"Administrador de clientes",
        "anios":"2020",
        "link":"https://comfy-cassata-d55953.netlify.app/",
        "image":"/img/portafolio/cliente.png",
        "description":"lorem impusummsds",
        "tecno":"React JS | TailwindCSS | JSON Server | API | React Router DOM"
      },
      {
        "project":"Planificador de gastos",
        "anios":"2020",
        "link":"https://aesthetic-bunny-021704.netlify.app/",
        "image":"/img/portafolio/planificador.png",
        "description":"lorem impusummsds",
        "tecno":"React JS  | LocalStorage | State"
      }
    ]
  return (
    <div id="portafolio">
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
