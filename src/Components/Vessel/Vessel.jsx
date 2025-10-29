import Carousel from 'react-bootstrap/Carousel';
import image1 from './seaLineOne.jpg';
import image2 from './seaLineFour.jpg';
import image3 from './seaLineThree.jpg';
import ExampleCarouselImage from './ExampleCarouselImage';


const images = [
  { src: image1, text: 'Собственнное судно в управлении' },
  { src: image2, text: 'Действует доставка Дверь-Дверь' },
  { src: image3, text: 'Third slide' },
];

export const Vessel=()=> {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <ExampleCarouselImage src={image.src} text={image.text} />
          <Carousel.Caption>
            <h3>{image.text}</h3>
            <p> {image.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

