import 'bootstrap/dist/css/bootstrap.min.css';
const ExampleCarouselImage = ({project}) => {
    const {image,link} = project;
    console.log(image)
    return (
        <a href={link} target='_blank' rel='noopener'>
            <div className='flex carousel-project justify-space align-center' > 
                <img
                src={image} alt="portafolio"/>
                <p>
                </p>
            </div>
        </a>
    );
}

export default ExampleCarouselImage;
