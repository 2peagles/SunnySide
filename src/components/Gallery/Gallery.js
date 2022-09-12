import React, {useState} from 'react';
import { Container, Col,Row } from 'react-bootstrap';
import './Gallery.css';
import imagegallerycone from '../../Images/Desktop/imagegallerycone.jpg';
import imagegallerymilkbottles from '../../Images/Desktop/imagegallerymilkbottles.jpg';
import imagegallerysugarcubes from '../../Images/Desktop/imagegallerysugarcubes.jpg';
import imagegalleryorange  from '../../Images/Desktop/imagegalleryorange.jpg';

import imagegalleryconem from '../../Images/Mobile/imagegalleryconem.jpg';
import imagegallerymilkbottlesm from '../../Images/Mobile/imagegallerymilkbottlesm.jpg';
import imagegallerysugarcubesm from '../../Images/Mobile/imagegallerysugarcubesm.jpg';
import imagegalleryorangem  from '../../Images/Mobile/imagegalleryorangem.jpg';

const Gallery = () => {
  const[mobileGalleryView, setMobileGalleryView]=useState(false);
  const handleClick = ()=>setMobileGalleryView(!mobileGalleryView);

  return (
    <Container fluid id="gallery" className={!mobileGalleryView ? "desktopgallery" : "mobilegallery"}>
{/* DESKTOP */}
      <Row onClick={handleClick} className="desktopview">
      <Col className="gallerytwo"><img src={imagegallerymilkbottles} alt="cone"/></Col>
      <Col className="galleryfour" ><img src={imagegalleryorange} alt="cone"/></Col>
      <Col className="galleryone"><img src={imagegallerycone} alt="cone"/></Col>
      <Col className="gallerythree"><img src={imagegallerysugarcubes} alt="cone"/></Col>
      </Row>

{/* MOBILE */}
        <Row onClick={handleClick} className="mobileview">
          <Row>
            <Col className="gallerytwo" ><img src={imagegallerymilkbottlesm} alt="cone"/></Col>
            <Col className="galleryfour" ><img src={imagegalleryorangem} alt="cone"/></Col>
          </Row>
          <Row>
            <Col className="galleryone" ><img src={imagegalleryconem} alt="cone"/></Col>
            <Col className="gallerythree" ><img src={imagegallerysugarcubesm} alt="cone"/></Col>
          </Row>
        </Row>

    </Container>
  )
}

export default Gallery
