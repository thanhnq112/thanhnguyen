// import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Gallery.css'
import { Link } from 'react-router-dom';


function Gallery(props) {
    return (
        <div className='container-gallery'>
            <div className="dir-gallery-title">
                <p className='dir-gallery-title-text1'>Check out my galleries below</p>
                <p className='dir-gallery-title-text2'>to see if my style is what you're looking for.</p>
            </div>

            <Row xs={1} sm={2} className='dir-gallery-row'>
                <Col className='dir-gallery-col'>
                    <Link className='dir-gallery-content-box' to='/thanhnguyen/portrait'>
                            <div className="dir-gallery-content-imgBox">
                                <p className='dir-gallery-content-text'>portrait</p>
                                <img className='dir-gallery-content-image' src={props.sourceImage1} alt="" />
                            </div>
                    </Link>
                </Col>
                <Col className='dir-gallery-col'>
                    <Link className='dir-gallery-content-box' to='/thanhnguyen/landscape'>
                            <div className="dir-gallery-content-imgBox">
                                <p className='dir-gallery-content-text'>landscape</p>
                                <img className='dir-gallery-content-image' src={props.sourceImage2} alt="" />
                            </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Gallery;