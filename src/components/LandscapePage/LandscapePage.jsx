import React, { useState } from 'react';
import './LandscapePage.css'
import dataLandscapes from './dataLandscape.json'
import { Box } from '@material-ui/core';
import { Masonry } from '@mui/lab';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

function LandscapePage() {
    
    const [openIndex, setOpenIndex] = useState(-1);
    const handleOpen = (index) => setOpenIndex(index);
    const handleClose = () => setOpenIndex(-1);
    
    return (

        <div className="landscape-container">
            <p className="landscape-title">"The best camera is the one that’s with you"</p>
            
            <Masonry columns={{ xs: 2, sm: 2, md: 4 }} spacing={0.5} className='masonry-box'>
                {dataLandscapes.map((data, index) => (
                    <div className='masonry-item' key={data.id}>
                        <img
                            src={data.image}
                            alt={data.location}
                            loading="lazy"
                            className='masonry-image'
                            onClick={() => {
                                handleOpen(index)
                                // handleLoad()
                            }}
                        />
                        <div className="masonry-location">
                            <img className='masonry-location-icon' src='img/location-white.png' alt="" />

                            <span className='masonry-location-text'>{data.location}</span>

                        </div>

                        <div>

                            <Modal
                                open={openIndex === index}
                                onClose={handleClose}
                                // closeAfterTransition={true}
                                
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}            
                            >
                                <Fade in={openIndex === index}>
                                    <Box className='masonry-modalBox'>
                                        <img 
                                            src={data.image}
                                            className='masonry-modalImage'
                                            alt=''
                                        />
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    )
}

export default LandscapePage;

