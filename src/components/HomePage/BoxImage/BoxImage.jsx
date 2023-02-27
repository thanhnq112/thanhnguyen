// import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './BoxImage.css'


function BoxImage(props) {
    return (
        <div className='ctn'>
            <Row xs={1} sm={2} className={props.reversePos ? 'boxImg-container boxImg-container_reverse' : 'boxImg-container'}>
                <Col className='boxImg-description'>
                    <p className='boxImg-description-text'>{props.description}</p>
                </Col>
                <Col className='boxImg-adv-img'>
                    <img className='boxImg-img' src={props.sourceImage} alt=""/>
                </Col>
            </Row>
        </div>
    )
}

export default BoxImage;