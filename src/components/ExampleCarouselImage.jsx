import image from '/img/principal.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const ExampleCarouselImage = () => {
    return (
        <div className='principal'> 
            <img
            src={image} alt="portafolio"/>
        </div>
    );
}

export default ExampleCarouselImage;
