import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';


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
      }
    ]
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {projectList.map(project =>(
        <Carousel.Item>
          <ExampleCarouselImage project={project} text="First slide" />
          <Carousel.Caption>
            <h3>{project.project}</h3>
            <p>{project.tecno}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

  </Carousel>
  );
}

export default Swipper;
