import React from 'react';
import './Grid.css';
import {Container, Button, Row, Col} from 'react-bootstrap';
import imagetransform from '../../Images/Desktop/imagetransform.jpg';
import imagestandout from '../../Images/Desktop/imagestandout.jpg';
// import imagesgraphicdesgin from '../../Images/Desktop/imagegraphicdesign.jpg';
// import imagephotography from '../../Images/Desktop/imagephotography.jpg';

const Grid = () => {
  return (
    <Container fluid id="grid">
        <Row xs={1} lg={2}>
            <Col  xs={{order:"2"}} lg={{order:'1'}} className="boxone">
                <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                    <Button> Learn More </Button>
            </Col>
            <Col xs={{order:'1'}} lg={{order:"2"}} className="boxtwo">
                <img src={imagetransform} alt="egg"/>
            </Col>
        </Row>
        <Row xs={12}>
            <Col  lg={6} className="boxthree">
                <img src={imagestandout} alt="pink cup"/>
            </Col>
            <Col  lg={6} className="boxfour">
                <h2>Stand out to the right audience</h2>
                <p>Using a callaborative formula of designers, researchers, photographers, videographics, and copywriters, we'll
                    build and etend your brand in digital places.
                </p>
                <Button>Learn More </Button>
            </Col>
        </Row>
        <Row>
            <Col xs={12} lg={6} className="boxfive">
                {/* <img src={imagesgraphicdesgin} alt="pink cup"/> */}
                <h2>Graphic Design</h2>
                <p>Great design makes you memorable.We deliver artwork that underscores your brand message and 
                    captures potential clients' attention.
                </p>
            </Col>
            <Col xs={12} lg={6} className="boxsix">
            {/* <img src={imagephotography} alt="pink cup"/> */}
                <h2>Photography</h2>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </Col>
        </Row>
    </Container>
  )
}

export default Grid
