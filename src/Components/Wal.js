import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import G1 from './mot5.jpg';
import G2 from './mot4.webp';
import G3 from './mot2.jpg';

const Wal = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
        style={{height:'75vh'}}
        className='d-block w-100'
        src={G1}
         text="First slide" />
        <Carousel.Caption>
          <h3>Amzing View</h3>
          <p>Lets Watchout this place now.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{height:'75vh'}}
        className='d-block w-100 w-lg-90'
        src={G2}
         text="First slide" />
        <Carousel.Caption>
          <h3>Peaceful place</h3>
          <p>Lets Watchout this place now.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{height:'75vh'}}
        className='d-block w-100'
        src={G3}
         text="First slide" />
      
        <Carousel.Caption>
          <h3>Lovely Nature</h3>
          <p>
          Lets Watchout this place now.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Wal 