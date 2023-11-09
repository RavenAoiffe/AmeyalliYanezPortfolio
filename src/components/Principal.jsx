import image from '/img/Foto_2.JPG';

const Principal = ({children}) => {
    return (
        <div className='principal flex align-center justify-center'> 
            <img  style={{display:'none'}}
            src={image} alt="portafolio"/>
            {children}
        </div>
    );
}

export default Principal;
