import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <hr className="footer-break"/>
                <p className='footer-email'>thanhnq112@gmail.com</p>
                <p className="footer-phone">+7(968)-063-99-98</p>
                <div className="footer-socialNetwork">
                    {/* eslint-disable-next-line */}
                    <a href="https://www.facebook.com" target="_blank">
                        <img className='footer-socialNetwork-icon' src="img/facebook.png" alt="" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href="https://www.youtube.com" target="_blank">
                        <img className='footer-socialNetwork-icon' src="img/youtube.png" alt="" />
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href="https://telegram.org/" target="_blank">
                        <img className='footer-socialNetwork-icon' src="img/telegram.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="footer-color-box"></div>
            {/* <div className="footer-box-copyright">
                <p className='footer-box-copyright-text'>Designed by Thanh Bu</p>
            </div> */}
        </div>
    )
}

export default Footer;