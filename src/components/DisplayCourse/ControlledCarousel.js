import React from 'react';
import { useState, activeIndex, onSelect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import './Style.css';
import firstSlide from '../../images/ux-788002_1920.jpg';
import secondSlide from '../../images/office-1356793_1280.png';
import thirdSlide from '../../images/paper-3033204_1280.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      <div className="trend-course-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Container>
        <Row>
          <Col>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Col>
          <Col>
          <img
            className="d-block w-50"
            src={firstSlide}
            alt="First slide"
          />
          </Col>
          </Row>
          </Container>
        </Carousel.Item>
        
        <Carousel.Item>
        <Container>
        <Row>
          <Col>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Col>
          <Col>
          <img
            className="d-block w-50"
            src={secondSlide}
            alt="Second slide"
          />
          </Col>
          </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item>
        <Container>
        <Row>
          <Col>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
          </Col>
          <Col>
          <img
            className="d-block w-50"
            src={thirdSlide}
            alt="Third slide"
          />
          </Col>
          </Row>
          </Container>
        </Carousel.Item>

      </Carousel>
      </div>
    );
  };

  export default ControlledCarousel;