
const Principal = ({children}) => {
    return (
        <>
            <div className='principal flex align-center justify-center'> 
            <div className="name">
                {children}
            </div>
            <nav className="nav-hero">
                <ul>
                    <li>
                        <a href='#presentacion'>Presentación</a>
                    </li>
                    <li>
                        <a href="#">Portafolio</a>
                    </li>
                    <li>
                        <a href="#">Experiencia</a>
                    </li>
                    <li>
                        <a href="#">Línea del tiempo</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
        </>

    );
}

export default Principal;
