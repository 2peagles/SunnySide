import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import imageemily from '../../Images/imageemily.jpg';
import imagethomas from '../../Images/imagethomas.jpg';
import imagejennie from '../../Images/imagejennie.jpg';
import './index.css';

const index = () => {
  return (
    <Container id="testimonials">
        <Row>
            <h2>CLIENT TESTIMONIALS</h2>
        </Row>
        <Row >
            <Col lg={4} sm={12}  className='testimonials-card'>
                <span className='testimonialimage'><img src={imageemily} alt="name" /></span>
                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <h3>Emily B.</h3>
                <h4>Marketing Director</h4>
            </Col>
            <Col lg={4} sm={12} className='testimonials-card'>    
           <span className='testimonialimage'> <img src={imagethomas} alt="name" /></span>
             <p>Sunnyside's enthusiam coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                <h3>Thomas S.</h3>
                <h4>Chief Operating Officer</h4></Col>
            <Col lg={4}  sm={12} className='testimonials-card'>
                <span className='testimonialimage'> <img src={imagejennie} alt="name" /></span>
                 <p>Incredibl end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <h3>Jennie F.</h3>
                <h4>Business Director</h4>
            </Col>
        </Row>
    </Container>
  )
}

export default index
