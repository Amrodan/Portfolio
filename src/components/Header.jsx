import React from 'react';
import './css/header.css';
import CTA from './CTA';
import ME from '../assets/ME.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
	return (
		<header className="container header__container">
			<div>
				<h5>hello i'm</h5>
				<h1>Amro Dandashli</h1>
				<h5 className="text-light">Front-end web developer</h5>
				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="" />
				</div>
				<a href="#contact" className="scroll__down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};
export default Header;
