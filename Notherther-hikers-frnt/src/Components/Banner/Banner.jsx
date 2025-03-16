import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/north-banner-slid1.webp';
import slide2 from '../../assets/nh-banner-far.jpg';
import slide3 from '../../assets/nh-banner-mwonj.jpg';
import './Banner.css'

function CarouselFadeExample() {
  return (
    <div className="nh-banner">
      <Carousel fade>
      <Carousel.Item className='nh-banner-item'>
      <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='nh-banner-item'>
      <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='nh-banner-item'>
      <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CarouselFadeExample;
