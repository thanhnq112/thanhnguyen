import React from 'react';
import '../HomePage/HomePage.css'
import BoxImage from './BoxImage/BoxImage';
import Gallery from "./Gallery/Gallery";


function HomePage() {
    return (
        <div className="home-container">
            <div className="thumbnail">
                <img className='thumbnail-img' src="img/thumbnail.jpg" alt=""/>
                <div className="transparent"></div>
                <div className="thumbnail-text">
                    <p className='thumbnail-text1'>Photography</p>
                    <p className='thumbnail-text2'>that revolves around you</p>
                </div>
            </div>

            <div className="home-quote">
                <p className="home-quote-text">“You don’t take a photograph, you make it”</p>
                <div className="home-quote-author-box">
                    <img className="home-quote-author-sign" src="img/qoute-author.png" alt=""/>
                </div>
            </div>

            <BoxImage 
                description='If you can see it, you can shoot it.'
                sourceImage='img/homepage-1.jpg'
                reversePos={false}
            />
            <BoxImage 
                description='The best thing about a picture is that it never changes, even when the people in it do.'
                sourceImage='img/homepage-2.jpg'
                reversePos={true}
            />

            <Gallery 
                sourceImage1='img/gallery-1.jpg'
                sourceImage2='img/gallery-2.jpg'
            />            
        </div>
    )
}

export default HomePage;