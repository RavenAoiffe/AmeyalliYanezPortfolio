const projectList = [
    {
      "project":"Escrituras Digitales",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/edigitales",
      "image":"/img/portafolio/escrituras1328.png",
      "description":"lorem impusummsds",
      "class":"square-big",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño"
    },
    {
      "project":"Fabrica de Producción Editorial",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/Fabrica_Editorial",
      "image":"/img/portafolio/fabrica1328.png",
      "description":"lorem impusummsds",
      "class":"square-small",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | Diseño 2018"
    },
    {
      "project":"DiseñaLab",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx/DisenaLab",
      "image":"/img/portafolio/disena1328.png",
      "description":"lorem impusummsds",
      "class":"square-third",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP"
    },
    {
      "project":"Centro Multimedia del Centro Nacional de las Artes",
      "anios":"2019",
      "link":"https://cmm.cenart.gob.mx",
      "image":"/img/portafolio/cmm328.png",
      "description":"lorem impusummsds",
      "class":"square-four",
      "tecno":"HTML | CSS | JAVASCRIPT | JQUERY | PHP | Diseño"
    },
    {
      "project":"Eurojazz 2020",
      "anios":"2020",
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "image":"/img/portafolio/eurojazz.png",
      "description":"lorem impusummsds",
      "class":"square-five",
      "tecno":"HTML | CSS | JAVASCRIPT | SCROLLMAGIC"
    },
    {
      "project":"PAPIAM",
      "anios":"2020",
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "image":"/img/portafolio/papiam.png",
      "description":"lorem impusummsds",
      "class":"square-six",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
    },
    {
      "project":"Muestra Papiam",
      "anios":"2020",
      "link":"https://cmm.cenart.gob.mx/Eurojazz",
      "image":"/img/portafolio/muestra.png",
      "description":"lorem impusummsds",
      "class":"square-big",
      "tecno":"HTML | SCSS | JAVASCRIPT | GULP | NodeJs"
    },
    {
      "project":"Administrador de Pacientes de Veterinaria",
      "anios":"2020",
      "link":"https://jazzy-peony-e5c7f8.netlify.app/",
      "image":"/img/portafolio/veterinaria.png",
      "description":"lorem impusummsds",
      "class":"square-small",
      "tecno":"React JS | TailwindCSS | LocalStorage"
    },
    {
      "project":"Administrador de clientes",
      "anios":"2020",
      "link":"https://comfy-cassata-d55953.netlify.app/",
      "image":"/img/portafolio/cliente.png",
      "description":"lorem impusummsds",
      "class":"square-thurd",
      "tecno":"React JS | TailwindCSS | JSON Server | API | React Router DOM"
    }
  ]

const Project = () => {
    return (            
        <>
            <div className="grid">
                <div className="layout square-big">
                    <img src="/public/escrituras.jpg" alt="muestra" />
                </div>
                <div className="layout square-small">
                    2
                </div>
                <div className="layout square-third">
                    3
                </div>
            </div>
            <div className="grid">
                <div className="layout square-four">
                    3
                </div>
                <div className="layout square-five">
                    2
                </div>
                <div className="layout square-six">
                    1
                </div>
            </div>
        </>
    ); 
}

export default Project;
