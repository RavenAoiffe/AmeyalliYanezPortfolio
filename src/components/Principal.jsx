import image from '/img/Foto.jpg';

const Principal = ({children}) => {
    return (
        <div className='principal flex align-center justify-center'> 
            <img
            src={image} alt="portafolio"/>
            {children}
        </div>
    );
}

export default Principal;
