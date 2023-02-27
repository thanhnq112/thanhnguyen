import React from 'react';
import './AboutPage.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage() {
    return (
        <div className="aboutme-container">
            <Row className='flex-column-reverse flex-md-row'>
                <Col className="aboutme-text">
                    <p className='aboutme-text_title'>I'm Thanh Nguyen</p>
                    <p className='aboutme-text_role'>Photographer</p>
                    <p className='aboutme-text_content'>I'm a freelance photographer. Love to travel and love to explore new things. Through pictures, i can record scenes and things going on around my life. Besides, i'm a graduate of Bauman Moscow State Technical University (Moscow, Russia) majoring in information systems and technology.</p>
                </Col>

                <Col className="aboutme-imgbox">
                    <img className='aboutme-img' src="about-me.png" alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default AboutPage;