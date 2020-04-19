import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Style.css';

import DisplayCourse from "../components/DisplayCourse/Main";

function Home() {
    return <div id="home-page">
    <Container>
        <Row>
            <DisplayCourse />
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
    </Container>
  </div>;
}
  
export default Home;