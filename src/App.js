import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import LandscapePage from "./components/LandscapePage/LandscapePage";
import PortraitPage from "./components/PortraitPage/PortraitPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className='App'>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/landscape" element={<LandscapePage />}/>
				<Route path="/portrait" element={<PortraitPage />}/>
				<Route path="/about" element={<AboutPage />}/>
				<Route path="/contact" element={<ContactPage />}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
