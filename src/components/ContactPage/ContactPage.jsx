import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ContactPage.css'
import { Button } from '@mui/material';

function ContactPage() {
    return (
        <div className="contact-container">
            <Row className="row_margin">
                <Col className='col-boxContainer'>
                    <div className='col-border1'>
                        <p className="box-header">Contact me</p>
                        <Box
                            className='boxForm'
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { 
                                    m: {
                                        xs: 1.0,
                                        sm: 1.0,
                                        lg: 1.5,
                                    }, 
                                    width: {
                                        xs: '30ch',
                                        sm: '38ch',
                                        lg: '50ch',
                                    }, 
                                    color: 'red',
                                },
                                "& label.Mui-focused": {
                                    color: '#c28557'
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "#c28557"
                                },
                              }}

                            ms={{
                                '& .MuiTextField-root': { 
                                    m: 1.5, 
                                    width: '30ch', 
                                    color: 'red',
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                className='text-field'
                                id="standard-basic"
                                label="Name"
                                type="text"
                                variant="standard"
                                inputProps={{
                                    autoComplete: 'off'
                                 }}
                            />
                            
                            <TextField
                                className='text-field'
                                id="standard-basic"
                                label="Email"
                                type=""
                                variant="standard"
                            />
                            <TextField
                                className='text-field'
                                id="standard-basic"
                                label="Phone"
                                type=""
                                variant="standard"
                            />
                            <TextField
                                className='text-field'
                                id="standard-basic"
                                label="Message"
                                type=""
                                variant="standard"
                            />
                        </Box>

                        <div className="boxForm-btn_container">
                            <Button
                                className='boxForm-btn_submit'
                                sx={{
                                    borderRadius: 0,
                                    color: '#fff',
                                    backgroundColor: '#333',
                                    my: 10,
                                    px: 4, py: 1.5,
                                    
                                    '&:hover': {
                                        color: '#fff',
                                        backgroundColor: '#666',
                                    }
                                }}
                            >
                                Send message
                            </Button>

                        </div>
                    </div>
                </Col>

                <Col className='col-infoContactContainer'>
                    <div className='col-border2'>
                        <div className="box-info">
                            <div className="info-title">
                                <img className='info-title-icon' src="img/phone.png" alt="" />
                                <p className="info-title-text">Call me</p>
                            </div>
                            <p className="info-content">+7(968)-063-99-98 / +84-96-288-95-60</p>
                        </div>

                        <div className="box-info">
                            <div className="info-title">
                                <img className='info-title-icon' src="img/location.png" alt="" />
                                <p className="info-title-text">Location</p>
                            </div>
                            <p className="info-content">Moscow, Izmailovsky Prospekt, 75A, 105043</p>
                        </div>

                        <div className="box-info">
                            <div className="info-title">
                                <img className='info-title-icon' src="img/email.png" alt="" />
                                <p className="info-title-text">Email</p>
                            </div>
                            <p className="info-content">thanhnq112@gmail.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactPage;