import AnchorLink from 'react-anchor-link-smooth-scroll';

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
                        <AnchorLink href='#presentacion' >Presentación</AnchorLink>
                        </li>
                        <li>
                        <AnchorLink href='#portafolio' >Portafolio</AnchorLink>
                        </li>
                        <li>
                        <AnchorLink href='#experiencia' >Experiencia</AnchorLink>
                        </li>
                </ul>
            </nav>
        </div>
        </>

    );
}

export default Principal;
