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
    
    // const [windowDimensions, setWindowDimensions] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    // });

    // const [isModalReady, setIsModalReady] = useState(false);

    // useEffect(() => {
    //     const modalBox = document.querySelector('.masonry-modalBox')
    //     const modalImage = document.querySelector('.masonry-modalImage')

    //     if (modalBox && modalImage) {
    //         setIsModalReady(true);
    //         console.log('da set isModel true');
    //     }
    // }, []);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowDimensions({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         });
    //     }
    
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    // const windowHeight = window.innerHeight;
    // const windowWidth = window.innerWidth;

    // window.addEventListener('load', () => {
    //     const test = document.querySelector('#root')
    //     console.log(test);
    // })
    
    // const handleLoad = () => {
    //     const modalBox = document.querySelector('.masonry-modalBox')
    //     const modalImage = document.querySelector('.masonry-modalImage')
    //     const windowDimensions = {
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     }
    //     if (modalBox && modalImage) {
    //         if (windowDimensions.height <= windowDimensions.width) {
    //             modalBox.style.height = '90%'
    //             modalBox.style.width = 'auto'
    //             modalImage.style.height = '100%'
    //             console.log('add style done when height <= width');
    //         }
    //         else {
    //             modalBox.style.width = '90%'
    //             modalBox.style.height = 'auto'
    //             modalImage.style.width = '100%'
    //             console.log('add style done when height > width');
    //         }

    //     }
    // }




    // useEffect(() => {
    //     console.log('height: ' + windowDimensions.height + ' / width: ' + windowDimensions.width);
    //     const handleLoad = (modalBox, modalImage) => {
    //         if (windowDimensions.height <= windowDimensions.width) {
    //             modalBox.style.height = '90%'
    //             modalBox.style.width = 'auto'
    //             modalImage.style.height = '100%'
    //             console.log('add style done when height <= width');
    //         }
    //         else {
    //             modalBox.style.width = '90%'
    //             modalBox.style.height = 'auto'
    //             modalImage.style.width = '100%'
    //             console.log('add style done when height > width');
    //         }
    //     }

    //     window.addEventListener('loaded', (event) => {
    //         console.log(event);
    //         const modalBox = document.querySelector('.masonry-modalBox')
    //         const modalImage = document.querySelector('.masonry-modalImage')
    //         if (modalBox && modalImage) handleLoad(modalBox, modalImage)
    //         else console.log('k laays dc modal');
    //     })
            

    // }, [windowDimensions])

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
                            <img className='masonry-location-icon' src='./img/location-white.png' alt="" />

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

