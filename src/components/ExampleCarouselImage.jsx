import 'bootstrap/dist/css/bootstrap.min.css';
const ExampleCarouselImage = ({project}) => {
    const {image,link} = project;
    return (
        <a href={link} target='_blank' rel='noopener'>
            <div className='flex carousel-project justify-space align-center' > 
                <h1>{project.project}</h1>
            </div>
        </a>
    );
}

export default ExampleCarouselImage;
