import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Slider = () => {
  return (
    <>

<Carousel controls={false} touch={true}>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{width:'800px', height:'460px'}}
      className="d-block w-100"
      src="assets/images/banner3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
  )
}

export default Slider
