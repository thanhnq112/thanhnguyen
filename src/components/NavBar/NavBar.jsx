import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './navBar.css';
import { FcMenu } from "react-icons/fc";
import { TfiClose } from "react-icons/tfi";


function NavBar() {
    const location = useLocation();
    // const IdActive = location.pathname.slice(1) === '' ? 'home' : location.pathname.slice(1);
    const IdActive = location.pathname === '/thanhnguyen/' ? 'home' : location.pathname.slice(13);

    const tabActivePrev = document.querySelector('.active')
    if (tabActivePrev) {
        tabActivePrev.classList.remove('active');
        const tabActive = document.getElementById(IdActive)
        tabActive.classList.add('active')
    }

    window.addEventListener('load', () => {
        const tabElmMoblie = document.querySelectorAll('.navbar__mobile-tab-element')
        const inputTag = document.querySelector('.nav__input')
        for (let i = 0; i < tabElmMoblie.length; i++) {
            tabElmMoblie[i].addEventListener('click', () => {
                inputTag.checked = false
            })
        }
    })

	return (
		<div className='navbar-container'>
            <div className='navbar-brand'>
                <Link className='navbar-brand-link' to='/thanhnguyen/'>
                    <span className='navbar-brand-text'>THANH NGUYEN</span>
                </Link>
            </div>
            <div className="navbar-tab">
                <Link className={`navbar-tab-element ${IdActive === 'home' ? 'active' : ''}`} id="home" to='/thanhnguyen/'>home</Link>
                <Link className={`navbar-tab-element ${IdActive === 'landscape' ? 'active' : ''}`} id="landscape" to='/thanhnguyen/landscape'>landscape</Link>
                <Link className={`navbar-tab-element ${IdActive === 'portrait' ? 'active' : ''}`} id="portrait" to='/thanhnguyen/portrait'>portrait</Link>
                <Link className={`navbar-tab-element ${IdActive === 'about' ? 'active' : ''}`} id="about" to='/thanhnguyen/about'>about</Link>
                <Link className={`navbar-tab-element ${IdActive === 'contact' ? 'active' : ''}`} id="contact" to='/thanhnguyen/contact'>contact</Link>
            </div>

            

            <input type="checkbox" hidden className='nav__input' id='nav-mobile-input' />

            <label htmlFor="nav-mobile-input" className='nav__bars-btn'>
                <FcMenu className='nav__bars-btn-icon' />
            </label>
            
            <label htmlFor="nav-mobile-input" className="nav__overlay"></label>

            <div className="navbar__mobile-tab">
                <label htmlFor="nav-mobile-input" className='navbar__mobile-close'>
                    <TfiClose className='navbar__mobile-close-icon' />
                </label>
                
                {/* <Link className='navbar__mobile-tab-element' to='/'>
                    <label htmlFor="nav-mobile-input" className='navbar__mobile-close'>
                        home                
                    </label>
                </Link> */}
                <Link className='navbar__mobile-tab-element' to='/thanhnguyen/'>home</Link>
                <Link className='navbar__mobile-tab-element' to='/thanhnguyen/landscape'>landscape</Link>
                <Link className='navbar__mobile-tab-element' to='/thanhnguyen/portrait'>portrait</Link>
                <Link className='navbar__mobile-tab-element' to='/thanhnguyen/about'>about</Link>
                <Link className='navbar__mobile-tab-element' to='/thanhnguyen/contact'>contact</Link>
                
                {/* <Link className='navbar__mobile-tab-element' to='/contact'>
                    <label htmlFor="nav-mobile-input" className='navbar__mobile-close'>
                        check                
                    </label>
                </Link> */}
            </div>

        </div>
	);
}

export default NavBar;