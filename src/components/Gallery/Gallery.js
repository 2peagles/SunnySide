import React  from 'react';
import { Container, Col,Row } from 'react-bootstrap';
import './Gallery.css';
import imagegallerycone from '../../Images/Desktop/imagegallerycone.jpg';
import imagegallerymilkbottles from '../../Images/Desktop/imagegallerymilkbottles.jpg';
import imagegallerysugarcubes from '../../Images/Desktop/imagegallerysugarcubes.jpg';
import imagegalleryorange  from '../../Images/Desktop/imagegalleryorange.jpg';

const Gallery = () => {
  return (
    <Container fluid id="gallery" >
      <Row className="desktopview">
        <Col className="gallerytwo" lg={3} md={3} xs={6}><img src={imagegallerymilkbottles} alt="cone"/></Col>
        <Col className="galleryfour" lg={3} md={3} xs={6}><img src={imagegalleryorange} alt="cone"/></Col>
        <Col className="galleryone" lg={3} md={3} xs={6}><img src={imagegallerycone} alt="cone"/></Col>
        <Col className="gallerythree" lg={3} md={3} xs={6}><img src={imagegallerysugarcubes} alt="cone"/></Col>
      </Row>

    </Container>
  )
}

export default Gallery
