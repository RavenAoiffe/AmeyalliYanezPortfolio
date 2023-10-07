import image from '/img/principal.jpg';

const Principal = ({children}) => {
    return (
        <div className='principal'> 
            <img
            src={image} alt="portafolio"/>
            {children}
        </div>
    );
}

export default Principal;
