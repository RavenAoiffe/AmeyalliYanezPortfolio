
import imgEscrituras from '../assets/escrituras.jpg';
import imgFabrica from '../assets/fabrica200.png';


const projectList = [
    {
      "project":"Escrituras Digitales",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/edigitales",
      "image":imgEscrituras,
      "description":"lorem impusummsds",
      "class":"square-big",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño"
    },
    {
      "project":"Fabrica de Producción Editorial",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/Fabrica_Editoria/Anteriores/2024",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square-small",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño 2018"
    },
    {
      "project":"DiseñaLab",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/DisenaLab",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square-third",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP"
    },
    {
      "project":"Centro Multimedia del Centro Nacional de las Artes",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | PHP | Diseño"
    },
    {
      "project":"Eurojazz 2020",
      "anios":"2020",
      "image":imgFabrica,
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"HTML | CSS | JAVASCRIPT | SCROLLMAGIC"
    },
    {
      "project":"PAPIAM",
      "anios":"2020",
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
    },
    {
      "project":"Muestra Papiam",
      "anios":"2020",
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "image":imgEscrituras,
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
    },
    {
      "project":"Administrador de Pacientes de Veterinaria",
      "anios":"2020",
      "link":"https://jazzy-peony-e5c7f8.netlify.app/",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"React JS | TailwindCSS | LocalStorage"
    },
    {
      "project":"Administrador de clientes",
      "anios":"2020",
      "link":"https://comfy-cassata-d55953.netlify.app/",
      "image":imgFabrica,
      "description":"lorem impusummsds",
      "class":"square",
      "tecno":"React JS | TailwindCSS | JSON Server | API | React Router DOM"
    }
  ]

const Project = () => {
    const i = 0;
    return (            
        <>
            <div className="grid">
                {projectList.map(project => (
                    <div className={ `layout ${project.class}`}>
                        <img src={project.image} alt={project.project} />
                        <div className="descripcion">
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    ); 
}

export default Project;
