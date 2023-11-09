//import image from '/img/Foto_2.JPG';
/*<img  style={{display:'none'}}
            src={image} alt="portafolio"/>*/
const Principal = ({children}) => {
    return (
        <div className='principal flex align-center justify-center'> 
            
            {children}
        </div>
    );
}

export default Principal;
